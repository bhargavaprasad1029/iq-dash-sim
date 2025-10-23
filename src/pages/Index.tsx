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
    <div className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(220 25% 3%) 50%, hsl(var(--background)) 100%)',
      }}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.06),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 space-y-10 relative">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px hsl(var(--primary) / 0.3))',
            }}
          >
            TVS iQube Digital Cluster
          </h1>
          <p className="text-muted-foreground text-base md:text-lg font-medium tracking-wide uppercase">
            Interactive Vehicle Simulation
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
        <div className="text-center text-sm text-muted-foreground pt-8 mt-4 border-t border-border/30 max-w-2xl mx-auto">
          <p className="font-medium tracking-wide">
            Use the throttle slider to accelerate • Toggle indicators and lights • Switch between Eco & Power modes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
