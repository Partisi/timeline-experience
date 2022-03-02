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

export const masterList = [
    {
        name: "Eocene",
        description1: "The Eocene is the second of five epochs in the Tertiary Period — the second of three epochs in the Paleogene — and lasted from about 55.8 to 33.9 million years ago. The oldest known fossils of most of the modern orders of mammals appear in a brief period during the early Eocene and all were small, under 10 kg. Both groups of modern ungulates, Artiodactyla and Perissodactyla, became prevalent mammals at this time, due to a major radiation between Europe and North America.",
        description2: "The early Eocene (Ypresian) is thought to have had the highest mean annual temperatures of the entire Cenozoic Era, with temperatures about 30° C; relatively low temperature gradients from pole to pole; and high precipitation in a world that was essentially ice-free. Land connections existed between Antarctica and Australia, between North America and Europe through Greenland, and probably between North America and Asia through the Bering Strait.",
        description3: "It was an important time of plate boundary rearrangement, in which the patterns of spreading centers and transform faults were changed, causing significant effects on oceanic and atmospheric circulation and temperature. In the middle Eocene, the separation of Antarctica and Australia created a deep water passage between those two continents, creating the circum-Antarctic Current. This changed oceanic circulation patterns and global heat transport, resulting in a global cooling event observed at the end of the Eocene. By the Late Eocene, the new ocean circulation resulted in a significantly lower mean annual temperature, with greater variability and seasonality worldwide. The lower temperatures and increased seasonality drove increased body size of mammals, and caused a shift towards increasingly open savanna-like vegetation, with a corresponding reduction in forests.",
        period: "55.8 to 33.9 million years ago",
        map: EoceneMap,
        animals: [
            {
                name: "Horse",
                description: "Among terrestrial vertebrates, the start of the Eocene is marked by the appearance of two new groups of animals: the perissodactyls, or odd-toed ungulates, and the artiodactyls, or even-toed ungulates. One of the perissodactyls were horses! The horse is a domesticated, odd-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.",
            },
            {
                name: "Tapir",
                description: "Tapirs look something like pigs with trunks, but they are actually related to horses and rhinoceroses. This eclectic lineage is an ancient one—and so is the tapir itself. Scientists believe that these animals have changed little over tens of millions of years. Tapirs have a short prehensile (gripping) trunk, which is really an extended nose and upper lip. They use this trunk to grab branches and clean them of leaves or to help pluck tasty fruit. Tapirs feed each morning and evening. During these hours they follow tunnel-like paths, worn through the heavy brush by many a tapir footstep, to reach water holes and lush feeding grounds. As they roam and defecate they deposit the seeds they have consumed and promote future plant growth.",
            },
            {
                name: "Deer",
                description: "Deer, (family Cervidae), any of 43 species of hoofed ruminants in the order Artiodactyla, notable for having two large and two small hooves on each foot and also for having antlers in the males of most species and in the females of one species. Deer are native to all continents except Australia and Antarctica, and many species have been widely introduced beyond their original habitats as game animals. One species, the reindeer (also known as the caribou), has been domesticated. Some swamp and island species are endangered, but most continental species are flourishing under protection and good management. Deer, when granted some protection, readily exploit man-made disturbances caused by agriculture, forestry, and urbanization. White-tailed deer, normally a cherished North American game animal, have even become pests in suburbs and cities in the United States and Canada.",
            },
        ]
    },

    {
        name: "Jurassic",
        description1: "Great plant-eating dinosaurs roaming the earth, feeding on lush ferns and palm-like cycads and bennettitaleans … smaller but vicious carnivores stalking the great herbivores … oceans full of fish, squid, and coiled ammonites, plus great ichthyosaurs and long-necked plesiosaurs … vertebrates taking to the air, like the pterosaurs and the first birds. This was the Jurassic Period, 199.6 to 145.5 million years ago* — a 54-million-year chunk of the Mesozoic Era.",
        description2: "It is quite true that the dinosaurs dominated the land fauna — although many of the dinosaurs featured in Jurassic Park, such as Triceratops and Tyrannosaurus rex, did not evolve until after the Jurassic was over. The largest dinosaurs of the time — in fact, the largest land animals of all time — were the gigantic sauropods, such as the famous Diplodocus (top right, above), Brachiosaurus and Apatosaurus. ",
        description3: "Other herbivorous dinosaurs of the Jurassic included the plated stegosaurs. Predatory dinosaurs of the Jurassic included fearsome carnosaurs such as Allosaurus, small, fast coelurosaurs, and ceratosaurs such as Dilophosaurus. The Jurassic also saw the origination of the first birds, including the well-known Archaeopteryx, probably from coelurosaurian ancestors.",
        period: "145.5 to 99.6 million years ago",
        map: JurassicMap,
        animals: [
            {
                name: "Allosaurus",
                description: "Allosaurus, (genus Allosaurus), subsumes Antrodemus, large carnivorous dinosaurs that lived from 150 million to 144 million years ago during the Late Jurassic Period; they are best known from fossils found in the western United States, particularly from the Cleveland-Lloyd Quarry in Utah and the Garden Park Quarry in Colorado. Allosaurus weighed two tons and grew to 10.5 metres (35 feet) in length, although fossils indicate that some individuals could have reached 12 metres. Half the body length consisted of a well-developed tail, and Allosaurus, like all theropod dinosaurs, was a biped. It had very strong hind limbs and a massive pelvis with strongly forward- (anteriorly) and rearward- (posteriorly) directed projections. The forelimbs were considerably smaller than the hind limbs but not as small as those of tyrannosaurs. The forelimbs had three fingers ending in sharp claws and were probably used for grasping.",
            },
            {
                name: "Archaeopteryx",
                description: "Archaeopteryx, genus of feathered dinosaur that was once thought to be the oldest known fossil bird. The specimens date to approximately 150 million years ago, during the Late Jurassic Epoch (163.5 million to 145 million years ago), and all were found in the Solnhofen Limestone Formation in Bavaria, Germany, starting in 1861. However, late 20th- and early 21st-century discoveries of other birdlike fossils of similar age, including Xiaotingia zhengi from the Liaoning deposits in China, have prompted several paleontologists to call for the reclassification of Archaeopteryx as a dinosaur. Much of what is known about Archaeopteryx comes from a series of well-preserved fossil specimens. The Solnhofen Limestone is a very fine-grained Jurassic limestone formed in a shallow tropical marine environment (probably a coral lagoon), where lime-rich muds slowly accumulated and permitted fossil material to be exceptionally well preserved. Several of the fossils show clear impressions of feathers. The sizes of the specimens range from that of a blue jay to that of a large chicken.",
            },
            {
                name: "Apatosaurus",
                description: "Apatosaurus, (genus Apatosaurus), subsumes Brontosaurus, genus of at least two species of giant herbivorous sauropod dinosaurs that lived between about 156 million and 151 million years ago, during the late Jurassic Period. Its fossil remains are found in North America and Europe. Although the genus has subsumed Brontosaurus formally since 1903, a body of evidence suggests that Apatosaurus and Brontosaurus should be classified as separate genera. Apatosaurus, which is considered to be one of the largest land animals of all time, weighed as much as 41 tonnes (roughly 45 tons) and measured up to 23 metres (about 75 feet) long, including its long neck and tail. It had four massive and pillarlike legs, and its tail was extremely long and whiplike. Although some scientists have suggested that the tail could have been cracked supersonically like a bullwhip, this is unlikely, as damage to the vertebrae would have been a more probable result.",
            },
        ]
    },

    {
        name: "Devonian",
        description1: "During the Devonian, two major animal groups colonized the land. The first tetrapods — land-living vertebrates — appeared during the Devonian, as did the first terrestrial arthropods, including wingless insects and the earliest arachnids. In the oceans, brachiopods flourished. Crinoids and other echinoderms, tabulate and rugose corals, and ammonites were also common.",
        description2: "Many new kinds of fish appeared. During the Devonian, there were three major continental masses: North America and Europe sat together near the equator, with much of their current area covered by shallow seas.",
        description3: "To the north lay a portion of modern Siberia. A composite continent of South America, Africa, Antarctica, India, and Australia dominated the southern hemisphere.",
        period: "419.2 million to 358.9 million years ago.",
        map: DevonianMap,
        animals: [
            {
                name: "Conodont",
                description: "Conodont animals are widely recognized as an important group of early vertebrates with tooth-like structures that comprised a feeding apparatus that represents the earliest expression of mineralized skeletons among vertebrates (Aldridge et al., 1993, 2013; Donoghue et al., 2000, 2008). The individual tooth-like structures of the feeding apparatus of the conodont animal are composed of calcium phosphate and referred to as either conodonts or conodont elements. The soft body of the conodont animal is rarely preserved, although from the few localities that have yielded soft parts, a basic understanding of the conodont animal body plan has emerged. There is a general consensus that they were small eel-like animals that occupied a variety of niches in early Cambrian to late Triassic seas (Aldridge and Briggs, 1989; Aldridge et al., 1993; Briggs et al., 1983). They were most abundant on continental shelves and were readily preserved in shelf carbonates, although bedding plane occurrences on shale are common.",
            },
            {
                name: "Dipnoi",
                description: "lungfish, (subclass Dipnoi), any member of a group of six species of living air-breathing fishes and several extinct relatives belonging to the class Sarcopterygii and characterized by the possession of either one or two lungs. The Dipnoi first appeared in the Early Devonian Epoch (about 419.2 million to 393.3 million years ago), and the extant species occur in rivers and lakes in Africa, South America, and Australia. These animals are especially interesting because of their characteristic body forms, generally large size, disjunct distribution over Earth’s tropical regions, and peculiar mode of life.",
            },
            {
                name: "Eurypterid",
                description: "eurypterid, member of an extinct order (Eurypterida) of unusual arthropods rarely preserved as fossils. The eurypterids appeared at the beginning of the Ordovician Period (about 488 million years ago) and became extinct at the end of the Permian Period (about 251 million years ago). Frequently referred to as giant scorpions, most eurypterids were small animals, although Jaekelopterus rhenaniae (also called Pterygotus rhenanius or P. buffaloenis), a species from the Silurian Period (about 444 to 416 million years ago) in North America, was the largest arthropod ever known; it reached a length of about 2.5 metres (8 feet). Similar in body plan to the horseshoe crab, eurypterids consisted of many segments; the animal’s anterior appendages served as oarlike swimming organs. Some eurypterids were active predators and could probably swim rapidly after prey, whereas others were probably bottom-dwelling scavengers. The eurypterids inhabited brackish-water environments and generally occurred among a specialized, often impoverished, faunal assemblage.",
            },
        ]
    },
]