import assert = require("assert");
import { EnumVariable, HardCodedEnum } from "../../../lib/interface/variables/enum-variable";

enum Genre {
    Fantasy, 
    MUSIC = "Music", 
    HORROR = "Horror",
}

class HardCodedGenre extends HardCodedEnum<typeof Genre> {
    constructor(value: Genre) {
        super(value, Genre);
    }
}

class GenreVariable extends EnumVariable<typeof Genre> {
    constructor(reference: string) {
        super(reference, Genre);
    }
}

describe("IEnumVariable", () => {
    describe("HardCodedEnum", () => {
        describe("constructor", () => {
            it("returns an instance if given an enum", () => {
                const genre = new HardCodedGenre(Genre.MUSIC);
                assert.ok(genre instanceof HardCodedGenre);
            });

            it("throws if value is not an enum", () => {
                assert.throws(() => {
                    new HardCodedGenre(2 as any);
                });
            });
        });

        describe("resolveToEnum", () => {
            it("returns the value as an enum", () => {
                const genreVar = new HardCodedGenre(Genre.MUSIC);
                const genre = genreVar.resolveToEnum({});

                assert.equal(genre, Genre.MUSIC);
            });
        });

        describe("resolve", () => {
            it("returns the value as a string", () => {
                const genreVar = new HardCodedGenre(Genre.MUSIC);
                const genre = genreVar.resolve({});

                assert.equal(genre, "Music");
            });
        });

        describe("print", () => {
            it("returns Music as a string", () => {
                const genreVar = new HardCodedGenre(Genre.MUSIC);
                const genre = genreVar.resolve({});

                assert.equal(genre, "Music");
            });

            it("returns Fantasy as a string", () => {
                const genreVar = new HardCodedGenre(Genre.Fantasy);
                const genre = genreVar.resolve({});

                assert.equal(genre, "Fantasy");
            });
        });

        describe("toJSON", () => {
            it("returns the value as a string", () => {
                const genreVar = new HardCodedGenre(Genre.MUSIC);
                const genre = JSON.stringify(genreVar);

                assert.equal(genre, "\"Music\"");
            });
        });

        describe("requiredInputs", () => {
            it("returns an empty list", () => {
                const genreVar = new HardCodedGenre(Genre.MUSIC);
                const inputs = genreVar.requiredInputs();

                assert.deepEqual(inputs, []);
            });
        });
    });

    describe("EnumVariable", () => {
        describe("resolve", () => {
            for (const genreString of ["Fantasy", "Music", "Horror"]) {
                it(`returns the resolved value as a string for ${genreString}`, () => {
                    const genreVar = new GenreVariable("genre");
                    const genre = genreVar.resolve({genre: genreString});

                    assert.equal(genre, genreString);
                });
            }

            it("throws for incorrect casing on enum", () => {
                const genreVar = new GenreVariable("genre");

                assert.throws(() => genreVar.resolve({genre: "MUSIC"}));
            });
        });

        describe("resoveToEnum", () => {
            const stringToGenre: Record<string, Genre> = {
                "Fantasy": Genre.Fantasy,
                "Music": Genre.MUSIC,
                "Horror": Genre.HORROR,
            }
            for (const genreString of Object.keys(stringToGenre)) {
                it(`returns the resolved value as an enum for ${genreString}`, () => {
                    const genreVar = new GenreVariable("genre");
                    const genre = genreVar.resolveToEnum({genre: genreString});

                    assert.equal(genre, stringToGenre[genreString]);
                });
            }
        });
    });
});