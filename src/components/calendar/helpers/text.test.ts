import { describe, it, expect } from "vitest";
import { getShortName } from "./text";



describe("short name", () => {
  const words = `
  accolade acrimony angst anomaly
   avant-garde baroque bona fide bonhomie boondoggle
   bourgeois bravado brogue brusque cacophony
   camaraderie capricious carte blanche caustic
   charisma cloying deja vu dichotomy dilettante 
   disheveled elan ennui ephemeral epitome equanimity 
   equivocate ersatz esoteric euphemism facetious 
   fait accompli fastidious faux pas fiasco finagle glib gregarious 
   harbinger hedonist heresy idiosyncratic idyllic indelicate infinitesimal insidious junket 
   litany lurid Machiavellian malaise malinger 
   mantra maudlin mercenary minimalist misnomer 
   narcissist nirvana non sequitur oblivion ogle 
   ostentatious ostracize panacea paradox peevish 
   perfunctory philistine picayune precocious propriety 
   quid pro quo quintessential red herring revel rhetoric 
   scintillating spartan stigma stoic suave supercilious 
   sycophant teetotaler tete-a-tete tirade tryst ubiquitous 
   unrequited untenable verbose vicarious vile waft zealous
   Zeitgeist`.split(' ').map(a => a.trim()).filter(a => !!a);

  it("can set max length", () => {

    const maxLength = 4
    for (const word of words) {
      const shortName = getShortName(word, maxLength);
      expect(shortName.length).toBeLessThanOrEqual(maxLength);
    }
  })

  it('all big words should end with \'', () => {
    const maxLength = 3
    const bigWords = words.filter(a => a.length > maxLength)
    for (const word of bigWords) {
      const shortName = getShortName(word, maxLength);
      const lastChar = shortName[shortName.length - 1]
      expect(lastChar).toBe("'");
      expect(shortName.length).toBe(maxLength);
    }
  })
})