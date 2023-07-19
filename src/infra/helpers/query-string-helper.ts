export class QueryStringHelper {
  fromObject(object: any): string {
    var params = [];
    for (var p in object)
      if (object.hasOwnProperty(p)) {
        params.push(
          encodeURIComponent(p) + "=" + encodeURIComponent(object[p])
        );
      }
    return params.length ? "?" + params.join("&") : "";
  }
}
