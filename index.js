console.log((1 >= NaN) || (1 <= NaN));
void(async function Index() {
  let {
    zwriteFileSync,
    zreadFileSync
  } = await import("./zfs.mjs");

  let scriptText = zreadFileSync("./pako.js", {
    encoding: "utf-8"
  });
  scriptText = scriptText
    .replace(
      /([$a-zA-Z_]+[$a-zA-Z0-9_]*)\s*=\s*function\s*\(/g,
      "$1 = function __dollar_sign__$1(",
    )
    .replace(
      /([$a-zA-Z_]+[$a-zA-Z0-9_]*)\s*:\s*function\s*\(/g,
      "$1 : function __dollar_sign__$1(",
    ).replaceAll('__dollar_sign__', '$');
  zwriteFileSync("./pretty-pako.js", scriptText);
})();
