import { VehicleState } from '@/hooks/useVehicleSimulation';
import { ChevronLeft, ChevronRight, Lightbulb, AlertTriangle } from 'lucide-react';

interface TelltaleIndicatorsProps {
  vehicleState: VehicleState;
}

export const TelltaleIndicators = ({ vehicleState }: TelltaleIndicatorsProps) => {
  const { leftIndicator, rightIndicator, highBeam, sideStand } = vehicleState;

  return (
    <div className="flex justify-center items-center gap-12 py-8">
      {/* Left Indicator */}
      <div
        className={`flex items-center gap-3 transition-all duration-300 ${
          leftIndicator ? 'active-indicator scale-110' : 'opacity-40'
        }`}
      >
        <ChevronLeft
          className="w-10 h-10 transition-transform duration-300"
          style={{
            color: leftIndicator ? 'hsl(var(--secondary))' : 'hsl(var(--muted-foreground))',
            filter: leftIndicator ? 'drop-shadow(0 0 16px hsl(var(--secondary))) drop-shadow(0 0 8px hsl(var(--secondary)))' : 'none',
          }}
        />
        <span className="text-sm font-bold uppercase tracking-[0.15em]">Left</span>
      </div>

      {/* High Beam */}
      <div
        className={`flex flex-col items-center gap-2 transition-all duration-300 ${
          highBeam ? 'scale-110' : 'opacity-40'
        }`}
      >
        <Lightbulb
          className="w-10 h-10 transition-transform duration-300"
          style={{
            color: highBeam ? 'hsl(var(--accent))' : 'hsl(var(--muted-foreground))',
            filter: highBeam ? 'drop-shadow(0 0 16px hsl(var(--accent))) drop-shadow(0 0 8px hsl(var(--accent)))' : 'none',
          }}
        />
        <span className="text-xs font-bold uppercase tracking-[0.15em]">High Beam</span>
      </div>

      {/* Side Stand Warning */}
      <div
        className={`flex flex-col items-center gap-2 transition-all duration-300 ${
          sideStand ? 'active-indicator scale-110' : 'opacity-40'
        }`}
      >
        <AlertTriangle
          className="w-10 h-10 transition-transform duration-300"
          style={{
            color: sideStand ? 'hsl(var(--warning))' : 'hsl(var(--muted-foreground))',
            filter: sideStand ? 'drop-shadow(0 0 16px hsl(var(--warning))) drop-shadow(0 0 8px hsl(var(--warning)))' : 'none',
          }}
        />
        <span className="text-xs font-bold uppercase tracking-[0.15em]">Side Stand</span>
      </div>

      {/* Right Indicator */}
      <div
        className={`flex items-center gap-3 transition-all duration-300 ${
          rightIndicator ? 'active-indicator scale-110' : 'opacity-40'
        }`}
      >
        <span className="text-sm font-bold uppercase tracking-[0.15em]">Right</span>
        <ChevronRight
          className="w-10 h-10 transition-transform duration-300"
          style={{
            color: rightIndicator ? 'hsl(var(--secondary))' : 'hsl(var(--muted-foreground))',
            filter: rightIndicator ? 'drop-shadow(0 0 16px hsl(var(--secondary))) drop-shadow(0 0 8px hsl(var(--secondary)))' : 'none',
          }}
        />
      </div>
    </div>
  );
};
