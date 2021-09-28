import jq from "jq-web";
import React from "react";
import { Column, ColumnComponent } from "../glide.next";

const run: Column = async (textColumn, langColumn, keyColumn) => {
  const text = textColumn?.value;
  if (text === undefined) return undefined;

  const lang = langColumn?.value;
  if (lang === undefined) return undefined;

  const key = keyColumn?.value;
  if (key === undefined) return undefined;

  const { data } = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${key}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ q: [text], target: lang }),
    }
  ).then(x => x.json());

  if (
    data !== undefined &&
    data.translations !== undefined &&
    data.translations.length > 0
  ) {
    return data.translations[0].translatedText;
  }

  return undefined;
};

const GoogleTranslateColumn = () => (
  <ColumnComponent
    name="Google Translate"
    description="Translate from one language to another."
    author="David Siegel <david@glideapps.com>"
    params={{
      text: {
        displayName: "Text",
        type: "string",
      },
      language: {
        displayName: "Target Language",
        type: "string",
      },
      key: {
        displayName: "API Key",
        type: "string",
      },
    }}
    result={{ type: "string" }}
    run={run}
    example={{
      text: "Hello, world!",
      language: "es",
    }}
  />
);

export default GoogleTranslateColumn;
