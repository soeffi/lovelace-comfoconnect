export const CARD_VERSION = '0.16.3';
export const CARD_TYPE = 'mqttcomfoair-card';
export const EDITOR_TYPE = 'mqttcomfoair-card-editor';

export type FanMode = 'off' | 'low' | 'medium' | 'high';

export interface FanButton {
  mode: FanMode;
  icon: string;
}

export const FAN_BUTTONS: FanButton[] = [
  { mode: 'off', icon: 'mdi:fan-off' },
  { mode: 'low', icon: 'mdi:fan-speed-1' },
  { mode: 'medium', icon: 'mdi:fan-speed-2' },
  { mode: 'high', icon: 'mdi:fan-speed-3' },
];

export interface FanSpeed {
  mode: FanMode;
  speed: number;
}

export const FAN_SPEEDS: FanSpeed[] = [
  {mode: 'off', speed: 0},
  {mode: 'low', speed: 33},
  {mode: 'medium', speed: 66},
  {mode: 'high', speed: 100},
];

/** Anzeige-Labels der Lüfterstufen (eine Quelle für Karte + Status-Chip). */
export const FAN_MODE_LABELS: Record<string, string> = {
  off: 'Aus', low: 'Stufe 1', medium: 'Stufe 2', high: 'Stufe 3',
};

/** Config-Schlüssel, die auf HA-Entities zeigen (eine Quelle für shouldUpdate + Editor-Reset). */
export const ENTITY_FIELDS: readonly string[] = [
  'fan',
  'tempSensor1', 'tempSensor2', 'tempSensor3', 'tempSensor4',
  'humSensor1', 'humSensor2', 'humSensor3', 'humSensor4',
  'filterstatus', 'bypass_valve', 'summer_mode', 'preheat',
  'fan_speed_supply', 'fan_speed_exhaust', 'level_supply', 'level_exhaust', 'flow_supply', 'flow_exhaust',
];
