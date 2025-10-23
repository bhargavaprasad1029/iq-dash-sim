import { useVehicleSimulation } from '@/hooks/useVehicleSimulation';
import { ClusterDisplay } from '@/components/ClusterDisplay';
import { TelltaleIndicators } from '@/components/TelltaleIndicators';
import { ControlPanel } from '@/components/ControlPanel';

const Index = () => {
  const {
    vehicleState,
    throttle,
    setThrottle,
    toggleMode,
    toggleLeftIndicator,
    toggleRightIndicator,
    toggleHighBeam,
    toggleSideStand,
    resetSimulation,
  } = useVehicleSimulation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card py-8 px-4">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{
              color: 'hsl(var(--primary))',
              textShadow: '0 0 30px hsl(var(--cluster-glow) / 0.5)',
            }}
          >
            TVS iQube Digital Cluster
          </h1>
          <p className="text-muted-foreground">
            Interactive Electric Scooter Simulation
          </p>
        </div>

        {/* Main Cluster Display */}
        <ClusterDisplay vehicleState={vehicleState} />

        {/* Telltale Indicators */}
        <TelltaleIndicators vehicleState={vehicleState} />

        {/* Control Panel */}
        <ControlPanel
          throttle={throttle}
          onThrottleChange={setThrottle}
          onToggleMode={toggleMode}
          onToggleLeftIndicator={toggleLeftIndicator}
          onToggleRightIndicator={toggleRightIndicator}
          onToggleHighBeam={toggleHighBeam}
          onToggleSideStand={toggleSideStand}
          onReset={resetSimulation}
        />

        {/* Info Footer */}
        <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border/50">
          <p>
            Use the throttle slider to accelerate • Toggle indicators and lights • Switch between Eco & Power modes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
