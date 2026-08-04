import "@/scss/feature-card-3d.scss";
import type { ComponentType } from "react";

type IconProps = {
  className?: string;
};

type FeatureCard3DProps = {
  icon: ComponentType<IconProps>;
  label: string;
};

export default function FeatureCard3D({ icon: Icon, label }: FeatureCard3DProps) {
  return (
    <div className="feature-card-3d">
      <div className="feature-card-3d__card">
        <div className="feature-card-3d__glass" aria-hidden="true" />

        <div className="feature-card-3d__content">
          <span className="feature-card-3d__title">{label}</span>
        </div>

        <div className="feature-card-3d__logo" aria-hidden="true">
          <span className="feature-card-3d__circle feature-card-3d__circle--1" />
          <span className="feature-card-3d__circle feature-card-3d__circle--2" />
          <span className="feature-card-3d__circle feature-card-3d__circle--3" />
          <span className="feature-card-3d__circle feature-card-3d__circle--4" />
          <span className="feature-card-3d__circle feature-card-3d__circle--5">
            <Icon className="feature-card-3d__icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
