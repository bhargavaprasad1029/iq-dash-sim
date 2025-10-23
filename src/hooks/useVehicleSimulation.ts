import { useState, useEffect, useCallback } from 'react';

export type RideMode = 'eco' | 'power';

export interface VehicleState {
  speed: number;
  battery: number;
  range: number;
  mode: RideMode;
  leftIndicator: boolean;
  rightIndicator: boolean;
  highBeam: boolean;
  sideStand: boolean;
}

const MAX_SPEED_ECO = 45; // km/h
const MAX_SPEED_POWER = 78; // km/h
const BATTERY_DRAIN_ECO = 0.012; // % per second at max speed
const BATTERY_DRAIN_POWER = 0.025; // % per second at max speed
const MAX_RANGE = 75; // km at full battery in eco mode

export const useVehicleSimulation = () => {
  const [throttle, setThrottle] = useState(0); // 0-100
  const [vehicleState, setVehicleState] = useState<VehicleState>({
    speed: 0,
    battery: 100,
    range: MAX_RANGE,
    mode: 'eco',
    leftIndicator: false,
    rightIndicator: false,
    highBeam: false,
    sideStand: true,
  });

  // Calculate speed based on throttle and mode
  useEffect(() => {
    const maxSpeed = vehicleState.mode === 'eco' ? MAX_SPEED_ECO : MAX_SPEED_POWER;
    const targetSpeed = (throttle / 100) * maxSpeed;
    
    const interval = setInterval(() => {
      setVehicleState(prev => {
        // Smooth speed transition
        const speedDiff = targetSpeed - prev.speed;
        const acceleration = speedDiff * 0.1; // Smooth acceleration
        const newSpeed = Math.max(0, prev.speed + acceleration);

        // Calculate battery drain based on current speed
        const speedRatio = newSpeed / maxSpeed;
        const baseDrain = vehicleState.mode === 'eco' ? BATTERY_DRAIN_ECO : BATTERY_DRAIN_POWER;
        const batteryDrain = baseDrain * speedRatio * 0.1; // 100ms interval
        
        const newBattery = Math.max(0, prev.battery - batteryDrain);

        // Calculate range based on battery and mode
        const rangeMultiplier = vehicleState.mode === 'eco' ? 1 : 0.7;
        const newRange = (newBattery / 100) * MAX_RANGE * rangeMultiplier;

        return {
          ...prev,
          speed: Math.round(newSpeed),
          battery: Math.max(0, parseFloat(newBattery.toFixed(1))),
          range: Math.round(newRange),
        };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [throttle, vehicleState.mode]);

  const toggleMode = useCallback(() => {
    setVehicleState(prev => ({
      ...prev,
      mode: prev.mode === 'eco' ? 'power' : 'eco',
    }));
  }, []);

  const toggleLeftIndicator = useCallback(() => {
    setVehicleState(prev => ({
      ...prev,
      leftIndicator: !prev.leftIndicator,
      rightIndicator: false, // Turn off opposite indicator
    }));
  }, []);

  const toggleRightIndicator = useCallback(() => {
    setVehicleState(prev => ({
      ...prev,
      rightIndicator: !prev.rightIndicator,
      leftIndicator: false, // Turn off opposite indicator
    }));
  }, []);

  const toggleHighBeam = useCallback(() => {
    setVehicleState(prev => ({
      ...prev,
      highBeam: !prev.highBeam,
    }));
  }, []);

  const toggleSideStand = useCallback(() => {
    setVehicleState(prev => ({
      ...prev,
      sideStand: !prev.sideStand,
    }));
  }, []);

  const resetSimulation = useCallback(() => {
    setThrottle(0);
    setVehicleState({
      speed: 0,
      battery: 100,
      range: MAX_RANGE,
      mode: 'eco',
      leftIndicator: false,
      rightIndicator: false,
      highBeam: false,
      sideStand: true,
    });
  }, []);

  return {
    vehicleState,
    throttle,
    setThrottle,
    toggleMode,
    toggleLeftIndicator,
    toggleRightIndicator,
    toggleHighBeam,
    toggleSideStand,
    resetSimulation,
  };
};
