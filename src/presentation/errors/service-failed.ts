export class ServiceFailed extends Error {
  constructor(serviceName: string, reason: any) {
    super(`Service ${serviceName} Failed.`);
    this.name = "ServiceFailed";
    console.error(`Service ${serviceName} Failed with:${reason}`);
  }
}
