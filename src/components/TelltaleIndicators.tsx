import { VehicleState } from '@/hooks/useVehicleSimulation';
import { ChevronLeft, ChevronRight, Lightbulb, AlertTriangle } from 'lucide-react';

interface TelltaleIndicatorsProps {
  vehicleState: VehicleState;
}

export const TelltaleIndicators = ({ vehicleState }: TelltaleIndicatorsProps) => {
  const { leftIndicator, rightIndicator, highBeam, sideStand } = vehicleState;

  return (
    <div className="flex justify-center items-center gap-8 py-6">
      {/* Left Indicator */}
      <div
        className={`flex items-center gap-2 transition-opacity ${
          leftIndicator ? 'active-indicator' : 'opacity-30'
        }`}
      >
        <ChevronLeft
          className="w-8 h-8"
          style={{
            color: leftIndicator ? 'hsl(var(--secondary))' : 'hsl(var(--muted-foreground))',
            filter: leftIndicator ? 'drop-shadow(0 0 10px hsl(var(--secondary)))' : 'none',
          }}
        />
        <span className="text-sm font-medium uppercase tracking-wide">Left</span>
      </div>

      {/* High Beam */}
      <div
        className={`flex flex-col items-center gap-1 transition-opacity ${
          highBeam ? '' : 'opacity-30'
        }`}
      >
        <Lightbulb
          className="w-8 h-8"
          style={{
            color: highBeam ? 'hsl(var(--accent))' : 'hsl(var(--muted-foreground))',
            filter: highBeam ? 'drop-shadow(0 0 10px hsl(var(--accent)))' : 'none',
          }}
        />
        <span className="text-xs font-medium uppercase tracking-wide">High Beam</span>
      </div>

      {/* Side Stand Warning */}
      <div
        className={`flex flex-col items-center gap-1 transition-opacity ${
          sideStand ? 'active-indicator' : 'opacity-30'
        }`}
      >
        <AlertTriangle
          className="w-8 h-8"
          style={{
            color: sideStand ? 'hsl(var(--warning))' : 'hsl(var(--muted-foreground))',
            filter: sideStand ? 'drop-shadow(0 0 10px hsl(var(--warning)))' : 'none',
          }}
        />
        <span className="text-xs font-medium uppercase tracking-wide">Side Stand</span>
      </div>

      {/* Right Indicator */}
      <div
        className={`flex items-center gap-2 transition-opacity ${
          rightIndicator ? 'active-indicator' : 'opacity-30'
        }`}
      >
        <span className="text-sm font-medium uppercase tracking-wide">Right</span>
        <ChevronRight
          className="w-8 h-8"
          style={{
            color: rightIndicator ? 'hsl(var(--secondary))' : 'hsl(var(--muted-foreground))',
            filter: rightIndicator ? 'drop-shadow(0 0 10px hsl(var(--secondary)))' : 'none',
          }}
        />
      </div>
    </div>
  );
};
