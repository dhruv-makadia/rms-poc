/* =========================================================================
   RMS POC — demo dataset
   Values mirror the current RMS Stage data so the mockup feels real.
   Swap this file for real API calls during the migration.
   ========================================================================= */

const MINES = [
  { id:533, name:"Suncor/Steepbank & Millenium", company:"Suncor Energy Inc., Oil Sands",
    address:"P.O. Box 4001, Ste. Main, Fort McMurray, AB T9H 3E3, Canada", city:"Fort McMurray",
    phone:"54 264 4298105", web:"www.suncor.com/en/about", email:"info@suncor.com",
    trucks:0, contacts:25, machines:585, status:"Active", color:"#0057B8", initials:"SU",
    locations:"Steepbank & Millenium Mines", type:"Surface", mineral:"Oil Sands", ownership:"Suncor",
    county:"", postal:"T9H3E3", fax:"1 780 791-8300", region:"North America",
    contactName:"Lynn Gould", contactTitle:"Director, Millenium Mine Operations", equipType:"TSHWZG" },
  { id:534, name:"Unspecified Cos./Mines (U.S.)", company:"Unspecified Cos./Mines (U.S.)",
    address:"U.S.A.", city:"—", phone:"—", web:"—", email:"—",
    trucks:0, contacts:0, machines:583, status:"Active", color:"#6E7377", initials:"US",
    locations:"Various", type:"Surface", mineral:"Mixed", ownership:"Various",
    county:"", postal:"", fax:"", region:"North America",
    contactName:"", contactTitle:"", equipType:"" },
  { id:535, name:"Arch Coal/Black Thunder", company:"Thunder Basin Coal Co. LLC",
    address:"P.O. Box 406, 5669 Highway 450, Wright, WY 82732 U.S.A.", city:"Wright",
    phone:"1 307 939-1300", web:"www.archcoal.com/about", email:"contact@archcoal.com",
    trucks:0, contacts:13, machines:278, status:"Active", color:"#1B4F9C", initials:"AC",
    locations:"Black Thunder Mine", type:"Surface", mineral:"Coal", ownership:"Arch Resources",
    county:"Campbell", postal:"82732", fax:"1 307 939-1400", region:"North America",
    contactName:"Dale Prentice", contactTitle:"Mine Maintenance Manager", equipType:"TSHWZG" },
  { id:536, name:"Syncrude/Aurora & North", company:"Syncrude Canada Ltd.",
    address:"P.O. Bag 4009, Fort McMurray, AB T9H 3L1, Canada", city:"Fort McMurray",
    phone:"1 780 790-5911", web:"http://www.syncrude.ca/about", email:"info@syncrude.com",
    trucks:0, contacts:9, machines:276, status:"Active", color:"#C8102E", initials:"SY",
    locations:"Aurora North & Mildred Lake", type:"Surface", mineral:"Oil Sands", ownership:"Syncrude",
    county:"", postal:"T9H3L1", fax:"1 780 790-5900", region:"North America",
    contactName:"Doreen Cole", contactTitle:"Managing Director", equipType:"TSHWZG" },
  { id:537, name:"Shell-Albian/Muskeg River, Jackpine", company:"Albian Sands Energy Inc.",
    address:"P.O. Box 5670, Fort McMurray, AB T9H 4W1, Canada", city:"Fort McMurray",
    phone:"1 780 713-4400", web:"http://www.shell.ca/en/about", email:"albian@shell.com",
    trucks:0, contacts:10, machines:253, status:"Active", color:"#DD1D21", initials:"SA",
    locations:"Muskeg River & Jackpine Mines", type:"Surface", mineral:"Oil Sands", ownership:"CNRL",
    county:"", postal:"T9H4W1", fax:"1 780 713-4401", region:"North America",
    contactName:"Brian Straub", contactTitle:"Mine Operations Manager", equipType:"TSHW" },
  { id:538, name:"Kennecott/Bingham Canyon", company:"Kennecott Utah Copper Corp.",
    address:"8362 West 10200 South, Bingham Canyon, UT 84006 U.S.A.", city:"Bingham Canyon",
    phone:"1 801 569-6000", web:"http://www.kennecott.com/", email:"info@kennecott.com",
    trucks:0, contacts:13, machines:223, status:"Active", color:"#B3282D", initials:"KE",
    locations:"Bingham Canyon Mine", type:"Surface", mineral:"Copper", ownership:"Rio Tinto",
    county:"Salt Lake", postal:"84006", fax:"1 801 569-6100", region:"North America",
    contactName:"Gaby Poirier", contactTitle:"General Manager", equipType:"TSHWZG" },
  { id:539, name:"ArcelorMittal/Mont-Wright", company:"ArcelorMittal Mining Canada G.P.",
    address:"P.O. Box 1817, Mont-Wright, QC G0G 1J0, Canada", city:"Mont-Wright",
    phone:"1 418 287-4700", web:"www.arcelormittal.com", email:"canada@arcelormittal.com",
    trucks:0, contacts:10, machines:123, status:"Active", color:"#F26522", initials:"AM",
    locations:"Mont-Wright Complex", type:"Surface", mineral:"Iron Ore", ownership:"ArcelorMittal",
    county:"", postal:"G0G1J0", fax:"1 418 287-4800", region:"North America",
    contactName:"Mapi Mobwano", contactTitle:"President & CEO", equipType:"TSHW" },
  { id:540, name:"North American Constr./Oil Sands", company:"North American Construction Group, Inc.",
    address:"Unit 100, 339 Powder Drive, Fort McMurray, AB T9K 0M3, Canada", city:"Fort McMurray",
    phone:"1 780 791-1997", web:"www.nacg.ca/mining", email:"info@nacg.ca",
    trucks:3, contacts:7, machines:122, status:"Active", color:"#00539B", initials:"NA",
    locations:"Oil Sands Region", type:"Surface", mineral:"Oil Sands", ownership:"NACG",
    county:"", postal:"T9K0M3", fax:"1 780 791-1998", region:"North America",
    contactName:"Joe Lambert", contactTitle:"President & CEO", equipType:"TSHWZG" },
  { id:541, name:"Can. Natl. Resources/Horizon", company:"Canadian Natural Resources Ltd.",
    address:"Bag 4025, Fort McMurray, AB T9H 3H5, Canada", city:"Fort McMurray",
    phone:"1 780 828-2500", web:"https://www.cnrl.com/operations", email:"info@cnrl.com",
    trucks:0, contacts:19, machines:110, status:"Active", color:"#00A0DF", initials:"CN",
    locations:"Horizon Oil Sands", type:"Surface", mineral:"Oil Sands", ownership:"CNRL",
    county:"", postal:"T9H3H5", fax:"1 780 828-2600", region:"North America",
    contactName:"Scott Stauth", contactTitle:"COO, Oil Sands Mining", equipType:"TSHWZG" },
  { id:542, name:"Teck Coal/Elkview", company:"Teck Coal Ltd.",
    address:"R.R. #1 - Highway 3, Sparwood, BC V0B 2G1, Canada", city:"Sparwood",
    phone:"1 250 425-8325", web:"http://www.teck.com/General", email:"info@teck.com",
    trucks:0, contacts:8, machines:101, status:"Active", color:"#003C71", initials:"TE",
    locations:"Elkview Operations", type:"Surface", mineral:"Metallurgical Coal", ownership:"Teck",
    county:"", postal:"V0B2G1", fax:"1 250 425-8400", region:"North America",
    contactName:"Robin Sheremeta", contactTitle:"SVP, Coal", equipType:"TSHW" },
  { id:543, name:"IOC/Carol Lake", company:"Iron Ore Company Of Canada",
    address:"P.O. Box 1000, Labrador City, NL A2V 2L8, Canada", city:"Labrador City",
    phone:"1 709 944-8400", web:"www.ironore.ca", email:"info@ironore.ca",
    trucks:0, contacts:9, machines:101, status:"Active", color:"#C8102E", initials:"IO",
    locations:"Carol Lake Operations", type:"Surface", mineral:"Iron Ore", ownership:"Rio Tinto",
    county:"", postal:"A2V2L8", fax:"1 709 944-8500", region:"North America",
    contactName:"Mike McCann", contactTitle:"President & CEO", equipType:"TSHWZG" },
  { id:544, name:"Transalta-Sunhills/Highvale", company:"Sunhills Mining LP",
    address:"P.O. Box 30, 44198 Sundance Road, Seba Beach, AB T0E 2B0, Canada", city:"Seba Beach",
    phone:"1 780 731-5300", web:"www.transalta.com/facilities", email:"info@transalta.com",
    trucks:0, contacts:7, machines:97, status:"Active", color:"#0072CE", initials:"TS",
    locations:"Highvale Mine", type:"Surface", mineral:"Coal", ownership:"TransAlta",
    county:"", postal:"T0E2B0", fax:"1 780 731-5400", region:"North America",
    contactName:"Blain van Melle", contactTitle:"EVP Alberta Operations", equipType:"TSHW" },
  { id:545, name:"Barrick Gold/Cortez & Cortez Hills", company:"Cortez Gold Mines Inc.",
    address:"HC 66 Box 1250, Crescent Valley, NV 89821 U.S.A.", city:"Crescent Valley",
    phone:"1 775 468-4400", web:"www.barrick.com/operations", email:"info@barrick.com",
    trucks:0, contacts:11, machines:92, status:"Active", color:"#C6952B", initials:"BG",
    locations:"Cortez & Cortez Hills", type:"Surface", mineral:"Gold", ownership:"Nevada Gold Mines",
    county:"Lander", postal:"89821", fax:"1 775 468-4500", region:"North America",
    contactName:"Henri Gonin", contactTitle:"Mine General Manager", equipType:"TSHWZG" },
  { id:546, name:"Peabody/North Antelope Rochelle", company:"Peabody Powder River Mining LLC",
    address:"Caller Box 3035, Gillette, WY 82717 U.S.A.", city:"Gillette",
    phone:"1 307 464-1300", web:"www.peabodyenergy.com", email:"info@peabodyenergy.com",
    trucks:0, contacts:6, machines:88, status:"Inactive", color:"#00477B", initials:"PB",
    locations:"North Antelope Rochelle Mine", type:"Surface", mineral:"Coal", ownership:"Peabody",
    county:"Campbell", postal:"82717", fax:"1 307 464-1400", region:"North America",
    contactName:"Marc Hathhorn", contactTitle:"President, U.S. Operations", equipType:"TSHW" },
  { id:547, name:"Freeport/Morenci", company:"Freeport-McMoRan Morenci Inc.",
    address:"4521 Highway 191, Morenci, AZ 85540 U.S.A.", city:"Morenci",
    phone:"1 928 865-4111", web:"www.fcx.com/operations", email:"info@fcx.com",
    trucks:2, contacts:12, machines:86, status:"Active", color:"#005596", initials:"FM",
    locations:"Morenci Operations", type:"Surface", mineral:"Copper", ownership:"Freeport-McMoRan",
    county:"Greenlee", postal:"85540", fax:"1 928 865-4200", region:"North America",
    contactName:"Josh Olmsted", contactTitle:"President, Americas", equipType:"TSHWZG" },
  { id:548, name:"BHP/Escondida", company:"Minera Escondida Ltda.",
    address:"Av. de la Minería 501, Antofagasta, Chile", city:"Antofagasta",
    phone:"56 55 232-9000", web:"www.bhp.com/escondida", email:"info@bhp.com",
    trucks:0, contacts:14, machines:79, status:"Active", color:"#E35205", initials:"BH",
    locations:"Escondida & Escondida Norte", type:"Surface", mineral:"Copper", ownership:"BHP",
    county:"", postal:"1240000", fax:"56 55 232-9100", region:"South America",
    contactName:"Alejandro Tapia", contactTitle:"Maintenance Superintendent", equipType:"TSHW" },
  { id:549, name:"Vale/Carajás", company:"Vale S.A.",
    address:"Rodovia Raymundo Mascarenhas, Parauapebas, PA 68516-000, Brazil", city:"Parauapebas",
    phone:"55 94 3327-1000", web:"www.vale.com/operations", email:"contato@vale.com",
    trucks:0, contacts:8, machines:74, status:"Active", color:"#008F83", initials:"VA",
    locations:"Carajás S11D & N4/N5", type:"Surface", mineral:"Iron Ore", ownership:"Vale",
    county:"", postal:"68516000", fax:"55 94 3327-1100", region:"South America",
    contactName:"Rafael Barbosa", contactTitle:"Mine Maintenance Lead", equipType:"TSHWZG" }
];

/* ---- Contacts shown on the Details tab (mine 533) --------------------- */
const CONTACTS = [
  { name:"Alan Scott", title:"Director of Maintenance – Fort Hill", phone:"1-403-808-6261", email:"alascott@suncor.com", last:"04 Apr 2019", tags:["Not linked"] },
  { name:"Allyson McIntosh", title:"Mine Equipment Maintenance Manager", phone:"1 780 743-6411", email:"amcintosh@suncor.com", last:"14 Dec 2018", tags:["DOZER","ELECT SHOVEL","HYD EXCAVATOR","TRUCK","WHEEL LOADER"] },
  { name:"Andrew Brandt", title:"Reliability Specialist – Trucks", phone:"Not available", email:"abrandt@suncor.com", last:"11 Aug 2022", tags:["TRUCK","DOZER","WHEEL LOADER","HYD EXCAVATOR","ELECT SHOVEL","DRAGLINE","DRILL"] },
  { name:"Anne Marie Toutant", title:"VP, Optimization & Integration", phone:"1 780 743-6411", email:"amtoutant@suncor.com", last:"17 Feb 2019", tags:["DOZER","TRUCK","WHEEL LOADER"] },
  { name:"Anthony Van Tol", title:"Mining Technology Development Lead", phone:"1-403-869-5692", email:"avantol@suncor.com", last:"02 Jun 2025", tags:["DOZER","DRAGLINE","DRILL","ELECT SHOVEL","HYD EXCAVATOR","TRUCK"] },
  { name:"Hugues Oneill", title:"Director MEM Field Execution", phone:"1-780-743-6506", email:"honeill@suncor.com", last:"11 Aug 2022", tags:["Not linked"] },
  { name:"Kevin Foley", title:"General Manager, NSE Mine Operations", phone:"1 780 743-6411", email:"kfoley@suncor.com", last:"17 Feb 2019", tags:["DOZER","ELECT SHOVEL","TRUCK"] },
  { name:"Lynn Gould", title:"Director, Millennium Mine Operations", phone:"1 780 743-6411", email:"lgould@suncor.com", last:"17 Feb 2019", tags:["DOZER","HYD EXCAVATOR","TRUCK","WHEEL LOADER","DRAGLINE"] },
  { name:"Michael Chwelos", title:"General Manager, Mine Maintenance", phone:"1 780 743-6411", email:"mchwelos@suncor.com", last:"22 Aug 2023", tags:["DOZER","ELECT SHOVEL","TRUCK","WHEEL LOADER","HYD EXCAVATOR","DRAGLINE","DRILL","OTHER"] },
  { name:"Pedro Fimbres", title:"Manager, Shovels", phone:"1 780 743-6411", email:"pfimbres@suncor.com", last:"29 Nov 2019", tags:["ELECT SHOVEL","HYD EXCAVATOR"] },
  { name:"Shaun Wadlow", title:"Sr Specialist Mine Engineer", phone:"1-780-799-1336", email:"shwadlow@suncor.com", last:"08 Aug 2025", tags:["Not linked"] },
  { name:"Troy Waye", title:"Maintenance Execution Director", phone:"1-780-370-3143", email:"twaye@suncor.com", last:"11 Aug 2022", tags:["TRUCK","DOZER","WHEEL LOADER","HYD EXCAVATOR"] }
];

/* ---- Fleet breakdown (mine 533) -------------------------------------- */
const FLEET = [
  { type:"Truck", icon:"truck", color:"#5C60C6", models:[
    ["930E-4","KOMATSU",57],["797B","CATERPILLAR",42],["980E-4","KOMATSU",36],["980E-4AT","KOMATSU",30],
    ["777D","CATERPILLAR",28],["793D","CATERPILLAR",25],["930E-2","KOMATSU",24],["980E-5","KOMATSU",22],
    ["785C","CATERPILLAR",17],["789C","CATERPILLAR",16],["930E-4AT","KOMATSU",16],["793F","CATERPILLAR",15],
    ["797","CATERPILLAR",12],["HD1500-5","KOMATSU",9],["930E-3","KOMATSU",8],["777F","CATERPILLAR",6],
    ["HD1500-7","KOMATSU",4],["930E-4E","KOMATSU",3],["789B","CATERPILLAR",3],["793C","CATERPILLAR",3],
    ["777G","CATERPILLAR",1],["777","CATERPILLAR",1]] },
  { type:"Dozer", icon:"dozer", color:"#6E72CE", models:[
    ["D11T","CATERPILLAR",48],["D10T","CATERPILLAR",43],["D10R","CATERPILLAR",21],["D475A-5","KOMATSU",12],
    ["D11R","CATERPILLAR",6],["D375A","KOMATSU",4],["D475A-3","KOMATSU",3],["690D","CATERPILLAR/TIGER",3],
    ["D10N","CATERPILLAR",3],["854G","CATERPILLAR",2],["854K","CATERPILLAR",2],["834B","CATERPILLAR",1],
    ["834H","CATERPILLAR",1],["D475A-5E0","KOMATSU",1]] },
  { type:"Hyd Excavator", icon:"excavator", color:"#B0617F", models:[
    ["PC2000-8","KOMATSU",4],["PC5500-6","KOMATSU",3],["H455S","KOMATSU/DEMAG",3],["PC8000-6","KOMATSU",2],
    ["EX5500-6","HITACHI",2],["EX1800","HITACHI",2],["EX1900-5","HITACHI",2],["EX2500-5","HITACHI",1],
    ["EX3600-5","HITACHI",1],["EX3600-6","HITACHI",1],["PC4000-6","KOMATSU",6]] },
  { type:"Elect Shovel", icon:"shovel", color:"#C94B4B", models:[
    ["4100XPC","P&H",8],["495HR","BUCYRUS",5],["4100C","P&H",4],["495HD","BUCYRUS",3],["2800XPB","P&H",2]] },
  { type:"Wheel Loader", icon:"loader", color:"#F7941E", models:[
    ["994F","CATERPILLAR",3],["WA1200-6","KOMATSU",2],["992K","CATERPILLAR",2],["L-2350","LETOURNEAU",1]] }
];

/* ---- Machines table (mine 533) --------------------------------------- */
const MACHINE_STATUSES = ["OPERATING","OPERATING","OPERATING","OPERATING","REMOVED","STANDBY"];
const MACHINE_SIZES = { "Truck":[3700,4000,5700], "Dozer":[388,425,641], "Hyd Excavator":[2100,2800],
                        "Elect Shovel":[1900,2400], "Wheel Loader":[1800,2100] };

function buildMachines(){
  const rows=[]; let seed=7;
  const rnd=()=>{ seed=(seed*9301+49297)%233280; return seed/233280; };
  FLEET.forEach(group=>{
    group.models.forEach(([model,make,count])=>{
      const shown=count;
      for(let i=0;i<shown;i++){
        const sizes=MACHINE_SIZES[group.type]||[400];
        rows.push({
          model, manufacturer:make.split("/")[0], equipmentType:group.type.toUpperCase(),
          serial: rnd()>.28 ? (Math.floor(rnd()*9)+1)+"YD"+String(Math.floor(rnd()*90000)+10000) : "",
          quantity: 1,
          size: sizes[Math.floor(rnd()*sizes.length)],
          status: MACHINE_STATUSES[Math.floor(rnd()*MACHINE_STATUSES.length)]
        });
      }
    });
  });
  return rows;
}
const MACHINES = buildMachines();

const CURRENT_USER = { name:"Admin User", role:"Administrator", initials:"AU", email:"admin@roscomining.com" };

/* ---- Images ---------------------------------------------------------
   Real RMS assets are used first; where the file name isn't known yet a
   local illustration keyed on the mine's mineral is used instead, so every
   mine and every contact has an image.
   --------------------------------------------------------------------- */
const RMS_LOGO      = "https://rms.roscomining.com/Stage/images/RoscoLogo.png";
/* Small mark shown in the sidebar when it is collapsed to the icon rail.
   Replace with the real icon file (or its URL) when you have it. */
const RMS_LOGO_ICON = "assets/img/logo-icon.png";
const MINE_IMG_BASE = "https://rms.roscomining.com/stage/images/mines/";

/* Add "mineId: fileName.png" entries as you collect them from RMS. */
const MINE_IMAGES = {
  533: "11102018081731.png",
  534: "22102018160945.jpg",
  535: "11102018091844.jpg",
  536: "11102018081848.jpg",
  537: "06102018213342.jpg",
  538: "11102018082120.jpg",
  539: "08102018173848.png",
  540: "11102018091937.png",
  541: "11102018092240.png",
  542: "06102018213741.png",
  543: "11102018092615.png",
  544: "11102018092358.gif",
  545: "09102018083142.png",
  546: "10102018211318.png",
  547: "06102018213425.jpg",
  548: "11102018093737.jpg",
  549: "11102018094017.png"
};

/* Shared contact-person photo — same image for every contact in every mine.
   Point this at the real RMS avatar asset when you have its URL. */
const CONTACT_AVATAR = "assets/img/avatar.svg";

const MINERAL_IMG = {
  "Oil Sands":"oil-sands", "Coal":"coal", "Metallurgical Coal":"coal",
  "Copper":"copper", "Iron Ore":"iron-ore", "Gold":"gold", "Mixed":"mixed"
};
MINES.forEach(m => {
  m.image    = MINE_IMAGES[m.id] ? MINE_IMG_BASE + MINE_IMAGES[m.id] : null;   // real RMS asset
  m.fallback = "assets/img/mines/" + (MINERAL_IMG[m.mineral] || "mixed") + ".svg";
});
CONTACTS.forEach(c => { c.photo = CONTACT_AVATAR; });

/* ---- Notes shown in the Notes panel on the details page --------------- */
const NOTES = [
  { author:"Admin User", initials:"AU", date:"08 Sep 2026 · 11:24",
    text:"Confirmed the 930E-4 fleet count with Allyson before the Q3 review. Numbers match the machine list." },
  { author:"Lynn Gould", initials:"LG", date:"22 Aug 2026 · 09:05",
    text:"Millennium is moving four 793D trucks to Steepbank next quarter — machine records will need updating." },
  { author:"Troy Waye", initials:"TW", date:"14 Jul 2026 · 16:40",
    text:"Requested updated tire size sheet for the 797B fleet. Follow up with the distributor." }
];

/* ---- Equipment types a contact can be linked to (Contact Persons editor) */
const EQUIPMENT_TYPES = ["DOZER","DRAGLINE","DRILL","ELECT SHOVEL","HYD EXCAVATOR","OTHER","TRUCK","WHEEL LOADER"];

/* ---- Lookup lists used by the Filter panel and the Add Mine form ------ */
const LK = {
  status:    ["Active","Inactive"],
  type:      ["Surface","Underground"],
  region:    ["North America","South America","Europe","Africa","Asia","Australia"],
  mineral:   ["Oil Sands","Coal","Metallurgical Coal","Copper","Iron Ore","Gold","Mixed"],
  equipment: ["TRUCK","DOZER","HYD EXCAVATOR","ELECT SHOVEL","WHEEL LOADER"],
  country:   ["Canada","U.S.A.","Chile","Brazil"]
};

/* ---- Sort options for the Filter panel -------------------------------- */
const SORTS = [
  { key:"name-asc",      label:"Mine Name (A–Z)" },
  { key:"name-desc",     label:"Mine Name (Z–A)" },
  { key:"machines-desc", label:"Machines (high → low)" },
  { key:"machines-asc",  label:"Machines (low → high)" },
  { key:"contacts-desc", label:"Contacts (high → low)" },
  { key:"city-asc",      label:"City (A–Z)" }
];

