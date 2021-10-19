module.exports = (req, res, next) => {
  // Si nous sommes sur la page de création
  if (JSON.parse(req.body.sauce !== undefined)) {
    // On récupere et on parse la data
    const sauce = JSON.parse(req.body.sauce);
    let { name, manufacturer, description, mainPepper } = sauce;
    let trimedTab = [];
    // On trim
    function toTrim(...string) {
      trimedTab = string.map((elt) => elt.trim());
    }
    toTrim(name, manufacturer, description, mainPepper);
    // On test
    const hasThreeCharacters = (currentValue) => currentValue.length >= 3;
    // Run
    if (trimedTab.every(hasThreeCharacters)) {
      next();
    } else {
      throw new Error("Les champs doivent contenir minimum 3 caractàres.");
    }

  } else {
    // Si nous sommes sur la page modifier
    // On récupere la requête
    const sauce = req.body;
    let { name, manufacturer, description, mainPepper } = sauce;
    // On prépare le tableau 
    let trimedTab = [];
    // Function qui supprime les espaces au début et a la fin d'une chaine de caractère
    function toTrim(...string) {
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
      trimedTab = string.map((elt) => elt.trim());
    }
    // On 
    toTrim(name, manufacturer, description, mainPepper);

    // On vérifie que les champs contiennent bien 3 caractères minimum
    const hasThreeCharacters = (currentValue) => currentValue.length >= 3;
    // On loop le tableau des champs
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    if (trimedTab.every(hasThreeCharacters)) {
      next();
    } else {
      throw new Error("Les champs doivent contenir minimum 3 caractàres.");
    }

  }
};