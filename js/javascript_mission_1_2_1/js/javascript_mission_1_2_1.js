// 問1：世界一最強の戦闘機 F-22はマッハ1.8で飛び続けることができます、この時の秒速は？
// 問2：地球の引力や重力を振り切り、ロケットを宇宙にまで上げるためには、マッハ33以上必要になります、この時の時速は？
// 問3：世界一速い車は「Bloodhound LSR」で時速約904kmを2019年に記録しました、この時速をマッハで表すと？
//解答をここから下に書く

//問1
//標準的マッハの条件 海面上、気温15℃の空気中の音速 ≒ 340.29 m/sとする
const SPEED_OF_SOUND_MPS = 340.29; // 海面上、気温15℃の空気中の音速 (m/s)
const F22_MACH_NUMBER = 1.8;

let f22_speed_mps = 0;

f22_speed_mps = SPEED_OF_SOUND_MPS * F22_MACH_NUMBER;
console.log("問1の答え:" + " 秒速 = " + f22_speed_mps);

//問2
//標準的マッハの条件 海面上、気温15℃の空気中の音速 ≒ 340.29 m/sとする

let rocket_speed_kph = 0;

// マッハから秒速に変換し、さらに時速に変換 (1時間 = 3600秒, 1km = 1000m)
// 33 * SPEED_OF_SOUND_MPS (m/s) * 3600 (s/h) / 1000 (m/km) = 33 * SPEED_OF_SOUND_MPS * 3.6 (km/h)
rocket_speed_kph = 33 * SPEED_OF_SOUND_MPS * 3.6;

console.log("問2の答え:" + " 時速 = " + rocket_speed_kph);

//問3
// 時速の音速 (海面上、気温15℃の空気中の音速 ≒ 1225 km/h)
const SPEED_OF_SOUND_KPH = 1225;
const BLOODHOUND_SPEED_KPH = 904;

let bloodhound_mach_number = 0;

bloodhound_mach_number = BLOODHOUND_SPEED_KPH / SPEED_OF_SOUND_KPH;
console.log("問3の答え:" + " マッハ = " + bloodhound_mach_number);
