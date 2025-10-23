import { VehicleState } from '@/hooks/useVehicleSimulation';
import { Battery, Fuel, Zap } from 'lucide-react';

interface ClusterDisplayProps {
  vehicleState: VehicleState;
}

export const ClusterDisplay = ({ vehicleState }: ClusterDisplayProps) => {
  const { speed, battery, range, mode } = vehicleState;

  // Determine battery color based on level
  const getBatteryColor = () => {
    if (battery > 50) return 'hsl(var(--battery-high))';
    if (battery > 20) return 'hsl(var(--battery-medium))';
    return 'hsl(var(--battery-low))';
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-card rounded-3xl p-8 shadow-2xl border border-border">
      {/* Glow effect background */}
      <div className="absolute inset-0 opacity-20 rounded-3xl blur-xl bg-gradient-radial from-primary/30 to-transparent" />
      
      <div className="relative space-y-6">
        {/* Mode indicator */}
        <div className="flex justify-center mb-4">
          <div
            className="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              backgroundColor: mode === 'eco' ? 'hsl(var(--eco-mode) / 0.2)' : 'hsl(var(--power-mode) / 0.2)',
              color: mode === 'eco' ? 'hsl(var(--eco-mode))' : 'hsl(var(--power-mode))',
              boxShadow: `0 0 20px ${mode === 'eco' ? 'hsl(var(--eco-mode) / 0.3)' : 'hsl(var(--power-mode) / 0.3)'}`,
            }}
          >
            <Zap className="inline-block w-4 h-4 mr-2 -mt-1" />
            {mode} Mode
          </div>
        </div>

        {/* Main speedometer */}
        <div className="text-center py-8">
          <div className="relative inline-block">
            <div
              className="text-8xl font-bold digital-display transition-all duration-300"
              style={{
                color: 'hsl(var(--primary))',
                textShadow: '0 0 30px hsl(var(--cluster-glow) / 0.8)',
              }}
            >
              {speed.toString().padStart(2, '0')}
            </div>
            <div className="text-xl font-semibold text-muted-foreground mt-2">km/h</div>
            
            {/* Speed ring indicator */}
            <svg
              className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="3"
                opacity="0.2"
              />
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeDasharray={`${(speed / (mode === 'eco' ? 45 : 78)) * 100 * 3.14} 314`}
                opacity="0.6"
                className="transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 0 8px hsl(var(--cluster-glow) / 0.6))',
                }}
              />
            </svg>
          </div>
        </div>

        {/* Battery and Range display */}
        <div className="grid grid-cols-2 gap-6">
          {/* Battery */}
          <div className="bg-muted/30 rounded-2xl p-6 backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3 mb-3">
              <Battery
                className="w-6 h-6"
                style={{ color: getBatteryColor() }}
              />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Battery
              </span>
            </div>
            <div
              className="text-4xl font-bold digital-display"
              style={{
                color: getBatteryColor(),
                textShadow: `0 0 15px ${getBatteryColor()}40`,
              }}
            >
              {battery.toFixed(1)}%
            </div>
            
            {/* Battery bar */}
            <div className="mt-4 h-2 bg-muted/50 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-500 rounded-full"
                style={{
                  width: `${battery}%`,
                  backgroundColor: getBatteryColor(),
                  boxShadow: `0 0 10px ${getBatteryColor()}`,
                }}
              />
            </div>
          </div>

          {/* Range */}
          <div className="bg-muted/30 rounded-2xl p-6 backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3 mb-3">
              <Fuel className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Range
              </span>
            </div>
            <div
              className="text-4xl font-bold digital-display"
              style={{
                color: 'hsl(var(--accent))',
                textShadow: '0 0 15px hsl(var(--accent) / 0.4)',
              }}
            >
              {range}
            </div>
            <div className="text-sm text-muted-foreground mt-1">kilometers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
