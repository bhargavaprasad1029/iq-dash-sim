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
    <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden">
      {/* Multi-layer background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card to-background/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="relative p-8 space-y-6" style={{ boxShadow: 'var(--shadow-elevated)' }}>
        {/* Mode indicator with glass morphism */}
        <div className="flex justify-center mb-4">
          <div
            className="relative px-8 py-3 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 backdrop-blur-md border"
            style={{
              background: mode === 'eco' 
                ? 'linear-gradient(135deg, hsl(var(--eco-mode) / 0.15), hsl(var(--eco-mode) / 0.25))'
                : 'linear-gradient(135deg, hsl(var(--power-mode) / 0.15), hsl(var(--power-mode) / 0.25))',
              color: mode === 'eco' ? 'hsl(var(--eco-mode))' : 'hsl(var(--power-mode))',
              borderColor: mode === 'eco' ? 'hsl(var(--eco-mode) / 0.3)' : 'hsl(var(--power-mode) / 0.3)',
              boxShadow: mode === 'eco' 
                ? '0 8px 32px hsl(var(--eco-mode) / 0.25), inset 0 1px 0 hsl(var(--eco-mode) / 0.2)'
                : '0 8px 32px hsl(var(--power-mode) / 0.25), inset 0 1px 0 hsl(var(--power-mode) / 0.2)',
            }}
          >
            <Zap className="inline-block w-4 h-4 mr-2 -mt-1 animate-pulse" />
            {mode} Mode
          </div>
        </div>

        {/* Main speedometer with enhanced effects */}
        <div className="text-center py-12">
          <div className="relative inline-block">
            <div
              className="text-9xl font-bold digital-display transition-all duration-300 leading-none"
              style={{
                color: 'hsl(var(--primary))',
                textShadow: '0 0 40px hsl(var(--cluster-glow)), 0 0 80px hsl(var(--cluster-glow) / 0.5)',
                filter: 'drop-shadow(0 4px 12px hsl(var(--primary) / 0.3))',
              }}
            >
              {speed.toString().padStart(2, '0')}
            </div>
            <div className="text-2xl font-semibold uppercase tracking-[0.3em] mt-4" style={{ color: 'hsl(var(--muted-foreground))' }}>km/h</div>
            
            {/* Enhanced speed ring indicator with double ring */}
            <svg
              className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]"
              style={{ transform: 'rotate(-90deg)' }}
            >
              {/* Outer subtle ring */}
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                opacity="0.3"
              />
              {/* Main progress ring */}
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="url(#speedGradient)"
                strokeWidth="4"
                strokeDasharray={`${(speed / (mode === 'eco' ? 45 : 78)) * 100 * 3.14} 314`}
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
                style={{
                  filter: 'drop-shadow(0 0 12px hsl(var(--cluster-glow)))',
                }}
              />
              <defs>
                <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Battery and Range display with enhanced cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Battery */}
          <div className="relative group rounded-2xl p-6 backdrop-blur-md border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--muted) / 0.4), hsl(var(--muted) / 0.2))',
              borderColor: 'hsl(var(--border) / 0.5)',
              boxShadow: '0 8px 32px hsl(220 25% 5% / 0.4)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Battery
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    color: getBatteryColor(),
                    filter: `drop-shadow(0 0 8px ${getBatteryColor()})`,
                  }}
                />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.15em]">
                  Battery
                </span>
              </div>
              <div
                className="text-5xl font-bold digital-display mb-4 leading-none"
                style={{
                  color: getBatteryColor(),
                  textShadow: `0 0 20px ${getBatteryColor()}60, 0 0 40px ${getBatteryColor()}30`,
                }}
              >
                {battery.toFixed(1)}%
              </div>
              
              {/* Enhanced battery bar with glow */}
              <div className="relative h-3 bg-muted/40 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full transition-all duration-500 rounded-full relative"
                  style={{
                    width: `${battery}%`,
                    background: `linear-gradient(90deg, ${getBatteryColor()}, ${getBatteryColor()}dd)`,
                    boxShadow: `0 0 16px ${getBatteryColor()}, inset 0 1px 0 rgba(255,255,255,0.2)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Range */}
          <div className="relative group rounded-2xl p-6 backdrop-blur-md border overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--muted) / 0.4), hsl(var(--muted) / 0.2))',
              borderColor: 'hsl(var(--border) / 0.5)',
              boxShadow: '0 8px 32px hsl(220 25% 5% / 0.4)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Fuel 
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" 
                  style={{ 
                    color: 'hsl(var(--accent))',
                    filter: 'drop-shadow(0 0 8px hsl(var(--accent)))',
                  }} 
                />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.15em]">
                  Range
                </span>
              </div>
              <div
                className="text-5xl font-bold digital-display mb-2 leading-none"
                style={{
                  color: 'hsl(var(--accent))',
                  textShadow: '0 0 20px hsl(var(--accent) / 0.6), 0 0 40px hsl(var(--accent) / 0.3)',
                }}
              >
                {range}
              </div>
              <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'hsl(var(--muted-foreground))' }}>
                kilometers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
