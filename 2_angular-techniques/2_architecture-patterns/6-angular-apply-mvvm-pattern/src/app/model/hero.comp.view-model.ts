import { EventEmitter } from "@angular/core";

/**
 * Đây là nơi cho tất cả các field mà chúng ta cần cho component state
 */
export class HeroViewModel {
  nameChanged: EventEmitter<string> = new EventEmitter<string>();
  canFlyChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _name!: string;
  private _canFly!: boolean;

  constructor(name: string, canFly: boolean) {
    this._name = name
    this._canFly = canFly
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
    this.nameChanged.emit(value);
  }

  get canFly(): boolean {
    return this._canFly;
  }

  set canFly(value: boolean) {
    this._canFly = value;
    this.canFlyChanged.emit(value);
  }
}