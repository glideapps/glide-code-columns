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
    description="Translate from one language to another"
    author="David Siegel <david@glideapps.com>"
    video="https://www.youtube.com/watch?v=A3knNbGfXh4"
    about={`
      Find supported languages at [cloud.google.com/translate/docs/languages](https://cloud.google.com/translate/docs/languages).
    `}
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
    icon={`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.74 30.15L20.66 25.13L20.72 25.07C24.2 21.19 26.68 16.73 28.14 12.01H34V8H20V4H16V8H2V11.98H24.34C22.99 15.84 20.88 19.5 18 22.7C16.14 20.63 14.6 18.38 13.38 16H9.38C10.84 19.26 12.84 22.34 15.34 25.12L5.17 35.17L8 38L18 28L24.22 34.22L25.74 30.15ZM37 20H33L24 44H28L30.25 38H39.75L42 44H46L37 20ZM31.75 34L35 25.33L38.25 34H31.75Z" fill="currentColor"/>
      </svg>
    `}
  />
);

export default GoogleTranslateColumn;
