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
    <div className="w-full max-w-2xl mx-auto space-y-6 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
      {/* Throttle Control */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium uppercase tracking-wide text-foreground">
            Throttle
          </label>
          <span className="text-sm font-bold digital-display text-primary">
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
      <div className="grid grid-cols-3 gap-3">
        {/* Left Indicator */}
        <Button
          onClick={onToggleLeftIndicator}
          variant="outline"
          className="h-16 flex flex-col gap-1 hover:bg-secondary/20 hover:text-secondary hover:border-secondary transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-xs">Left Turn</span>
        </Button>

        {/* Mode Toggle */}
        <Button
          onClick={onToggleMode}
          variant="outline"
          className="h-16 flex flex-col gap-1 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all"
        >
          <Zap className="w-5 h-5" />
          <span className="text-xs">Mode</span>
        </Button>

        {/* Right Indicator */}
        <Button
          onClick={onToggleRightIndicator}
          variant="outline"
          className="h-16 flex flex-col gap-1 hover:bg-secondary/20 hover:text-secondary hover:border-secondary transition-all"
        >
          <ChevronRight className="w-5 h-5" />
          <span className="text-xs">Right Turn</span>
        </Button>

        {/* High Beam */}
        <Button
          onClick={onToggleHighBeam}
          variant="outline"
          className="h-16 flex flex-col gap-1 hover:bg-accent/20 hover:text-accent hover:border-accent transition-all"
        >
          <Lightbulb className="w-5 h-5" />
          <span className="text-xs">High Beam</span>
        </Button>

        {/* Side Stand */}
        <Button
          onClick={onToggleSideStand}
          variant="outline"
          className="h-16 flex flex-col gap-1 hover:bg-destructive/20 hover:text-destructive hover:border-destructive transition-all"
        >
          <AlertTriangle className="w-5 h-5" />
          <span className="text-xs">Side Stand</span>
        </Button>

        {/* Reset */}
        <Button
          onClick={onReset}
          variant="outline"
          className="h-16 flex flex-col gap-1 hover:bg-muted hover:text-foreground transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          <span className="text-xs">Reset</span>
        </Button>
      </div>
    </div>
  );
};
