import * as glide from "../glide";
import seedrandom from "seedrandom";

const names =
  "dozmarbinwansamlitsighidfidlissogdirwacsabwissibrigsoldopmodfoglidhopdardorlorhodfolrintogsilmirholpaslacrovlivdalsatlibtabhanticpidtorbolfosdotlosdilforpilramtirwintadbicdifrocwidbisdasmidloprilnardapmolsanlocnovsitnidtipsicropwitnatpanminritpodmottamtolsavposnapnopsomfinfonbanporworsipronnorbotwicsocwatdolmagpicdavbidbaltimtasmalligsivtagpadsaldivdactansidfabtarmonranniswolmispallasdismaprabtobrollatlonnodnavfignomnibpagsopralbilhaddocridmocpacravripfaltodtiltinhapmicfanpattaclabmogsimsonpinlomrictapfirhasbosbatpochactidhavsaplindibhosdabbitbarracparloddosbortochilmactomdigfilfasmithobharmighinradmashalraglagfadtopmophabnilnosmilfopfamdatnoldinhatnacrisfotribhocnimlarfitwalrapsarnalmoslandondanladdovrivbacpollaptalpitnambonrostonfodponsovnocsorlavmatmipfap";
const endings =
  "zodnecbudwessevpersutletfulpensytdurwepserwylsunrypsyxdyrnuphebpeglupdepdysputlughecryttyvsydnexlunmeplutseppesdelsulpedtemledtulmetwenbynhexfebpyldulhetmevruttylwydtepbesdexsefwycburderneppurrysrebdennutsubpetrulsynregtydsupsemwynrecmegnetsecmulnymtevwebsummutnyxrextebfushepbenmuswyxsymselrucdecwexsyrwetdylmynmesdetbetbeltuxtugmyrpelsyptermebsetdutdegtexsurfeltudnuxruxrenwytnubmedlytdusnebrumtynseglyxpunresredfunrevrefmectedrusbexlebduxrynnumpyxrygryxfeptyrtustyclegnemfermertenlusnussyltecmexpubrymtucfyllepdebbermughuttunbylsudpemdevlurdefbusbeprunmelpexdytbyttyplevmylwedducfurfexnulluclennerlexrupnedlecrydlydfenwelnydhusrelrudneshesfetdesretdunlernyrsebhulrylludremlysfynwerrycsugnysnyllyndyndemluxfedsedbecmunlyrtesmudnytbyrsenwegfyrmurtelreptegpecnelnevfes";

function* syllables(seq: string, length: number) {
  for (let i = 0; i < seq.length; i++) {
    yield seq.substr(i, length);
  }
}

const prefix = Array.from(syllables(names, 3));
const suffix = Array.from(syllables(endings, 3));

function pick<T>(ts: T[], generator: () => number): T {
  const rand = generator();
  return ts[Math.floor(rand * ts.length)];
}

const namers = {
  galaxy(generator: () => number) {
    const p = pick(prefix, generator);
    return `~${p}`;
  },
  star(generator: () => number) {
    const p = pick(prefix, generator);
    const s = pick(suffix, generator);
    return `~${p}${s}`;
  },
  planet(generator: () => number) {
    const p = pick(prefix, generator);
    const s = pick(suffix, generator);
    const p2 = pick(prefix, generator);
    const s2 = pick(suffix, generator);
    return `~${p}${s}-${p2}${s2}`;
  },
};

export default glide
  .columnNamed("Urbit Name")
  .withCategory("Fun")
  .withDescription(
    `Converts the first character of string to upper case and the remaining to lower case.`
  )
  .withAuthor("urbit Project", "urbit.me")

  .withRequiredStringParam("value")
  .withStringParam("kind", `Kind (${Object.keys(namers).join(", ")})`)
  .withStringResult()

  // .withTest({ value: `Glide` }, "~abtumt-aprvwe")
  // .withTest({ value: `Glide`, kind: "galaxy" }, "~abt")
  // .withTest({ value: `Glide`, kind: "star" }, "~abtumt")
  // .withTest({ value: `Glide`, kind: "planet" }, "~abtumt-aprvwe")

  .run(({ value, kind = "planet" }) => {
    const generator = seedrandom(value);
    console.log({
      value,
      r: generator(),
    });
    return namers[kind]?.(generator);
  });
