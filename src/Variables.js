// Maps
import EoceneMap from "./assets/maps/eocene.jpeg"
import JurassicMap from "./assets/maps/jurassic.jpeg"
import DevonianMap from "./assets/maps/devonian.jpeg"

/**
 * https://ucmp.berkeley.edu/tertiary/eocene.php#:~:text=The%20Eocene%20is%20the%20second,were%20small%2C%20under%2010%20kg.
 * https://ucmp.berkeley.edu/mesozoic/jurassic/jurassic.php
 * https://ucmp.berkeley.edu/devonian/devonian.php
 * https://www.britannica.com/science/Eocene-Epoch
 * https://www.britannica.com/science/Jurassic-Period/Vertebrates
 * https://www.britannica.com/science/Devonian-Period/Devonian-life
 */
// Animals
import horse from "./assets/animals/horse.jpeg"

export const masterList = [
    {
        name: "Eocene",
        description: "The Eocene is the second of five epochs in the Tertiary Period — the second of three epochs in the Paleogene — and lasted from about 55.8 to 33.9 million years ago. The oldest known fossils of most of the modern orders of mammals appear in a brief period during the early Eocene and all were small, under 10 kg. Both groups of modern ungulates, Artiodactyla and Perissodactyla, became prevalent mammals at this time, due to a major radiation between Europe and North America.Tectonics and paleoclimateThe early Eocene (Ypresian) is thought to have had the highest mean annual temperatures of the entire Cenozoic Era, with temperatures about 30° C; relatively low temperature gradients from pole to pole; and high precipitation in a world that was essentially ice-free. Land connections existed between Antarctica and Australia, between North America and Europe through Greenland, and probably between North America and Asia through the Bering Strait. It was an important time of plate boundary rearrangement, in which the patterns of spreading centers and transform faults were changed, causing significant effects on oceanic and atmospheric circulation and temperature. In the middle Eocene, the separation of Antarctica and Australia created a deep water passage between those two continents, creating the circum-Antarctic Current. This changed oceanic circulation patterns and global heat transport, resulting in a global cooling event observed at the end of the Eocene. By the Late Eocene, the new ocean circulation resulted in a significantly lower mean annual temperature, with greater variability and seasonality worldwide. The lower temperatures and increased seasonality drove increased body size of mammals, and caused a shift towards increasingly open savanna-like vegetation, with a corresponding reduction in forests.",
        period: "55.8 to 33.9 million years ago",
        map: EoceneMap,
        locations: [
            { name: "New Jersey", id: 10, x: 10, y: 50 },
            { name: "New Jersey", id: 10, x: 10, y: 50 },
            { name: "New Jersey", id: 10, x: 10, y: 50 },
        ],
        animals: [
            {
                name: "Horses",
                description: "Among terrestrial vertebrates, the start of the Eocene is marked by the appearance of two new groups of animals: the perissodactyls, or odd-toed ungulates, and the artiodactyls, or even-toed ungulates. One of the perissodactyls were horses! The horse is a domesticated, odd-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.",
                imgSmall: horse,
                imgLarge: null,
                locationId: 10
            },
            {
                name: "Tapir",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
            {
                name: "Deer",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
        ]
    },

    {
        name: "Jurassic",
        description: "Great plant-eating dinosaurs roaming the earth, feeding on lush ferns and palm-like cycads and bennettitaleans … smaller but vicious carnivores stalking the great herbivores … oceans full of fish, squid, and coiled ammonites, plus great ichthyosaurs and long-necked plesiosaurs … vertebrates taking to the air, like the pterosaurs and the first birds. This was the Jurassic Period, 199.6 to 145.5 million years ago* — a 54-million-year chunk of the Mesozoic Era. It is quite true that the dinosaurs dominated the land fauna — although many of the dinosaurs featured in Jurassic Park, such as Triceratops and Tyrannosaurus rex, did not evolve until after the Jurassic was over. The largest dinosaurs of the time — in fact, the largest land animals of all time — were the gigantic sauropods, such as the famous Diplodocus (top right, above), Brachiosaurus and Apatosaurus. Other herbivorous dinosaurs of the Jurassic included the plated stegosaurs. Predatory dinosaurs of the Jurassic included fearsome carnosaurs such as Allosaurus, small, fast coelurosaurs, and ceratosaurs such as Dilophosaurus. The Jurassic also saw the origination of the first birds, including the well-known Archaeopteryx, probably from coelurosaurian ancestors.",
        period: "145.5 to 99.6 million years ago",
        map: JurassicMap,
        locations: [
            { name: "New Jersey", id: 10, x: 10, y: 50 },
            { name: "New Jersey", id: 10, x: 10, y: 50 },
            { name: "New Jersey", id: 10, x: 10, y: 50 },
        ],
        animals: [
            {
                name: "Allosaurus",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
            {
                name: "Archaeopteryx",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
            {
                name: "Apatosaurus",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
        ]
    },

    {
        name: "Devonian",
        description: "During the Devonian, two major animal groups colonized the land. The first tetrapods — land-living vertebrates — appeared during the Devonian, as did the first terrestrial arthropods, including wingless insects and the earliest arachnids. In the oceans, brachiopods flourished. Crinoids and other echinoderms, tabulate and rugose corals, and ammonites were also common. Many new kinds of fish appeared. During the Devonian, there were three major continental masses: North America and Europe sat together near the equator, with much of their current area covered by shallow seas. To the north lay a portion of modern Siberia. A composite continent of South America, Africa, Antarctica, India, and Australia dominated the southern hemisphere.",
        period: "419.2 million to 358.9 million years ago.",
        map: DevonianMap,
        locations: [
            { name: "New Jersey", id: 10, x: 10, y: 50 },
            { name: "New Jersey", id: 10, x: 10, y: 50 },
            { name: "New Jersey", id: 10, x: 10, y: 50 },
        ],
        animals: [
            {
                name: "Conodonts",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
            {
                name: "Dipnoi",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
            {
                name: "eurypterids",
                description: "Elpehants are big bois",
                imgSmall: null,
                imgLarge: null,
                locationId: 10
            },
        ]
    },
]