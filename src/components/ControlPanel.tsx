import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  Zap,
  RotateCcw,
} from 'lucide-react';

interface ControlPanelProps {
  throttle: number;
  onThrottleChange: (value: number) => void;
  onToggleMode: () => void;
  onToggleLeftIndicator: () => void;
  onToggleRightIndicator: () => void;
  onToggleHighBeam: () => void;
  onToggleSideStand: () => void;
  onReset: () => void;
}

export const ControlPanel = ({
  throttle,
  onThrottleChange,
  onToggleMode,
  onToggleLeftIndicator,
  onToggleRightIndicator,
  onToggleHighBeam,
  onToggleSideStand,
  onReset,
}: ControlPanelProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 rounded-3xl p-8 overflow-hidden relative backdrop-blur-xl border"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--card) / 0.95), hsl(var(--background) / 0.9))',
        borderColor: 'hsl(var(--border) / 0.5)',
        boxShadow: '0 20px 60px hsl(220 25% 5% / 0.6)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Throttle Control */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Throttle
          </label>
          <span className="text-2xl font-bold digital-display text-primary px-4 py-1 rounded-lg"
            style={{
              textShadow: '0 0 20px hsl(var(--primary) / 0.5)',
              background: 'hsl(var(--primary) / 0.1)',
            }}
          >
            {throttle}%
          </span>
        </div>
        <Slider
          value={[throttle]}
          onValueChange={(value) => onThrottleChange(value[0])}
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      {/* Control Buttons Grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left Indicator */}
        <Button
          onClick={onToggleLeftIndicator}
          variant="outline"
          className="h-20 flex flex-col gap-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm group border-border/50"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--muted) / 0.1))',
          }}
        >
          <ChevronLeft className="w-6 h-6 group-hover:text-secondary transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider">Left Turn</span>
        </Button>

        {/* Mode Toggle */}
        <Button
          onClick={onToggleMode}
          variant="outline"
          className="h-20 flex flex-col gap-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm group border-border/50"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--muted) / 0.1))',
          }}
        >
          <Zap className="w-6 h-6 group-hover:text-primary transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider">Mode</span>
        </Button>

        {/* Right Indicator */}
        <Button
          onClick={onToggleRightIndicator}
          variant="outline"
          className="h-20 flex flex-col gap-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm group border-border/50"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--muted) / 0.1))',
          }}
        >
          <ChevronRight className="w-6 h-6 group-hover:text-secondary transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider">Right Turn</span>
        </Button>

        {/* High Beam */}
        <Button
          onClick={onToggleHighBeam}
          variant="outline"
          className="h-20 flex flex-col gap-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm group border-border/50"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--muted) / 0.1))',
          }}
        >
          <Lightbulb className="w-6 h-6 group-hover:text-accent transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider">High Beam</span>
        </Button>

        {/* Side Stand */}
        <Button
          onClick={onToggleSideStand}
          variant="outline"
          className="h-20 flex flex-col gap-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm group border-border/50"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--muted) / 0.1))',
          }}
        >
          <AlertTriangle className="w-6 h-6 group-hover:text-destructive transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider">Side Stand</span>
        </Button>

        {/* Reset */}
        <Button
          onClick={onReset}
          variant="outline"
          className="h-20 flex flex-col gap-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm group border-border/50"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--muted) / 0.1))',
          }}
        >
          <RotateCcw className="w-6 h-6 group-hover:text-foreground transition-colors" />
          <span className="text-xs font-bold uppercase tracking-wider">Reset</span>
        </Button>
      </div>
    </div>
  );
};
