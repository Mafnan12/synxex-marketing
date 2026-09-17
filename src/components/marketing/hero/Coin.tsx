import { AssetIcon } from "./AssetIcon";
import type { AssetIconKey } from "./assets";
import styles from "./hero.module.css";

export function Coin({ icon, label, size }: { icon: AssetIconKey; label: string; size: number }) {
  return (
    <div className={styles.coin} style={{ width: size, height: size }}>
      <AssetIcon icon={icon} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
