import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealService {



  myDeals = {

    '11111111111111': {
      company: 'Protean Electric',
      status: 'completed',
      industry: 'enterprise & ai',
      amount: 2333000,
      completed: true,
      notes: ["Adipisicing anim culpa amet velit.", "Nisi voluptate commodo eu consectetur ex dolore exercitation deserunt consectetur consectetur veniam in.", "lorem ipsumEx tempor enim cupidatat et Lorem Lorem velit exercitation dolore quis.", 'Esse ipsum ea ullamco in officia deserunt deserunt laborum amet fugiat consectetur id voluptate.', 'Esse elit commodo do ad elit ipsum esse officia reprehenderit laboris irure.'],
    },
    '1': { company: 'UiPath', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '2': { company: 'Face++', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '3': { company: 'Daily Harvest', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '4': { company: 'Allbirds', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '5': { company: 'MM.LaFleur', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '6': { company: 'Ant Financial', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '7': { company: 'Block.one', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '8': { company: 'SenseTime', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '9': { company: 'Lending Point', status: 'completed', amount: 456780, completed: true },
    '10': { company: 'Credit Karma', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '11': { company: 'Bitmain', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '12': { company: 'Artsys360', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '13': { company: 'Helix', industry: 'consumer', amount: 200000, completed: false },
    '14': { company: 'Echodyne', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '15': { company: 'Ghostwave', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    '16': { company: 'Lunewave', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '17': { company: 'Sollis Therapeutics', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '18': { company: 'Relievant', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '654yhj7u510': { company: 'Assure Services', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '3345nw3': { company: 'Company 1', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '454bt5b644': { company: 'Company++', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '45bt54525': { company: 'Company 2', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '6b45tb5345': { company: 'Company 3', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '344tb556': { company: 'Company 4', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88tersbt594': { company: 'Company 5', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33u78576539': { company: 'Company 6', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '2n4nw6y33': { company: 'Company 7', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '23b4y5v6bw4555': { company: 'Company 9', status: 'completed', amount: 456780, completed: true },
    '236yu56ynb76543': { company: 'Company 10', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '3w54yt3b5eb9': { company: 'Company 11', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '5wye56ynb5wy1': { company: 'Company 12', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '6wrybe56eryb51': { company: 'Company 13', industry: 'consumer', amount: 200000, completed: false },
    '14wb4by66by6eb00': { company: 'Company 14', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '1wbw4vtw54btw45bt6': { company: 'Company 15', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    '24w4btw4563w45634re56565': { company: 'Company 16', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '12tw4tbw4etw428': { company: 'Company 17', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '91wbt5ywt9': { company: 'Company 18', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '65w5ybw5t10': { company: 'Company 19', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '33w45tyb3': { company: 'Company 20', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '44tygh65454': { company: 'Company 21', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    'w45b65wt4by6bw4': { company: 'Company 22', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '6qbw4tv55b345': { company: 'Company 23', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '34wb5bq4vw56': { company: 'Company 24', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88w4v5rt594': { company: 'Company 25', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33w5v4et539': { company: 'Company 26', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '23v5w45b5n6yu7yb3': { company: 'Company 27', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '23by56t555': { company: 'Company 28', status: 'completed', amount: 456780, completed: true },
    '23v5rye676543': { company: 'Company 29', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '3t1q1q19': { company: 'Company 30', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '3v3vv3b3b': { company: 'Company 31', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '6erggbrgrg51': { company: 'Company 32', industry: 'consumer', amount: 200000, completed: false },
    '1445y6jtrgf00': { company: 'Company 33', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '165y6hy': { company: 'Company 34', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    'mmm45634re56565': { company: 'Company 35', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    'vtgtr': { company: 'Company 36', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '9gtret19': { company: 'Company 37', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '65tgsrgtg10': { company: 'Company 38', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '3sdrgthtg33': { company: 'Company 39', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '5vwewftc': { company: 'Company 40', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '52v4t4vr5': { company: 'Company 41', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '63t5btht45': { company: 'Company 42', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '34btt4eb56': { company: 'Company 43', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88bt594': { company: 'Company 44', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33be4t4et39': { company: 'Company 45', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '2we4tb33': { company: 'Company 46', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '235ebw4tgy43bt55': { company: 'Company 47', status: 'completed', amount: 456780, completed: true },
    '23gb676543': { company: 'Company 48', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '3444449': { company: 'Company 49', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '1tbe45tynh': { company: 'Company 50', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '65e5no9ppo1': { company: 'Company 51', industry: 'consumer', amount: 200000, completed: false },
    '14b8irib00': { company: 'Company 52', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '16vr7brrt': { company: 'Company 53', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    'xxx4re56565': { company: 'Company 54', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '122wertwrt8': { company: 'Company 55', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '95t55519': { company: 'Company 56', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '6545tv32vc2110': { company: 'Company 57', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '32c323c333': { company: 'Company 58', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '443vvb3b4': { company: 'Company 59', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '54b4b525': { company: 'Company 60', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '634b4b45': { company: 'Company 61', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '345b4tbyr56': { company: 'Company 62', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '886765nj89n94': { company: 'Company 63', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '3b56n5be339': { company: 'Company 64', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '23wb5y5b63': { company: 'Company 65', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    'w4b566': { company: 'Company 66', status: 'completed', amount: 456780, completed: true },
    '2366bu76666676543': { company: 'Company 67', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '35e6b54444b9': { company: 'Company 68', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '122b44b4b8': { company: 'Company 69', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '91pqpaqpq9': { company: 'Company 70', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '6zjzj510': { company: 'Company 71', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '145w': { company: 'UiPath', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    'v42': { company: 'Face++', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '334bt4b': { company: 'Daily Harvest', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '4v4': { company: 'Allbirds', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '5345': { company: 'MM.LaFleur', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    'vt46': { company: 'Ant Financial', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '7vt3': { company: 'Block.one', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '8sergv': { company: 'SenseTime', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '9vtq4': { company: 'Lending Point', status: 'completed', amount: 456780, completed: true },
    '1aevt0': { company: 'Credit Karma', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '134v1': { company: 'Bitmain', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '1szvzdf2': { company: 'Artsys360', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '1e43qt3': { company: 'Helix', industry: 'consumer', amount: 200000, completed: false },
    '1da f4': { company: 'Echodyne', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '143v 5': { company: 'Ghostwave', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    '1SD F6': { company: 'Lunewave', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '1347': { company: 'Sollis Therapeutics', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '1sdf 8': { company: 'Relievant', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '65324yhj7u510': { company: 'Assure Services', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '33fae45nw3': { company: 'Company 1', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '454btsF5b644': { company: 'Company++', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    'GFT4Y5G4': { company: 'Company 2', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '6b45tbV435C5345': { company: 'Company 3', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '34443C43tb556': { company: 'Company 4', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88tC34ersbt594': { company: 'Company 5', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33uC4FCF78576539': { company: 'Company 6', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '2n4nCFFC4F4w6y33': { company: 'Company 7', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '23b4DFS y5v6bw4555': { company: 'Company 9', status: 'completed', amount: 456780, completed: true },
    '236SASDyu56ynb76543': { company: 'Company 10', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '3w54ytWCCFS3b5eb9': { company: 'Company 11', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '5wye56CSynb5wy1': { company: 'Company 12', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '6wrybeSD56eryb51': { company: 'Company 13', industry: 'consumer', amount: 200000, completed: false },
    '14wb4bCy66by6eb00': { company: 'Company 14', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '1wbw4vV4tw54btw45bt6': { company: 'Company 15', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    '24w4btV4w4563w45634re56565': { company: 'Company 16', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '12tw4EVtbw4etw428': { company: 'Company 17', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '91wbtSDFCSDFCCSEV55ywt9': { company: 'Company 18', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '65w54ybw5t10': { company: 'Company 19', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '33w4SD5tyb3': { company: 'Company 20', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '44tyDS Fgh65454': { company: 'Company 21', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    'w45b3465wt4by6bw4': { company: 'Company 22', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '6qbw4t3v55b345': { company: 'Company 23', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '34wb25bq4vw56': { company: 'Company 24', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88w4v53rt594': { company: 'Company 25', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33w5v34et539': { company: 'Company 26', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '23v35w45b5n6yu7yb3': { company: 'Company 27', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '23b3y56t555': { company: 'Company 28', status: 'completed', amount: 456780, completed: true },
    '23v5r3ye676543': { company: 'Company 29', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '3t13q1q19': { company: 'Company 30', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '3v3vv33b3b': { company: 'Company 31', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '6erggb1rgrg51': { company: 'Company 32', industry: 'consumer', amount: 200000, completed: false },
    '1445y36jtrgf00': { company: 'Company 33', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '1653y6hy': { company: 'Company 34', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    'mmm451634re56565': { company: 'Company 35', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    'vtg1tr': { company: 'Company 36', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '9gt1ret19': { company: 'Company 37', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '65t1gsrgtg10': { company: 'Company 38', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '3sd1rgthtg33': { company: 'Company 39', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '5vw2ewftc': { company: 'Company 40', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '52v24t4vr5': { company: 'Company 41', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '63t25btht45': { company: 'Company 42', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '34bt2t4eb56': { company: 'Company 43', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88b2t594': { company: 'Company 44', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33b2e4t4et39': { company: 'Company 45', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '2we24tb33': { company: 'Company 46', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '235ebw4tgy43b2t55': { company: 'Company 47', status: 'completed', amount: 456780, completed: true },
    '23g2b676543': { company: 'Company 48', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '34444249': { company: 'Company 49', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '1tbe452tynh': { company: 'Company 50', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '65e5n2o9ppo1': { company: 'Company 51', industry: 'consumer', amount: 200000, completed: false },
    '14b8ir2ib00': { company: 'Company 52', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '16vr7br2rt': { company: 'Company 53', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    'x2xx4re56565': { company: 'Company 54', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '1222wertwrt8': { company: 'Company 55', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '95t255519': { company: 'Company 56', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '65452tv232vc2110': { company: 'Company 57', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '32c3223c333': { company: 'Company 58', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '443vvb23b4': { company: 'Company 59', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '54b4b5225': { company: 'Company 60', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '634b4b452': { company: 'Company 61', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '345b422tbyr56': { company: 'Company 62', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '886765Dnj89n94': { company: 'Company 63', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '3b563n5be339': { company: 'Company 64', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '23wb53y5b63': { company: 'Company 65', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    'w4b56D6': { company: 'Company 66', status: 'completed', amount: 456780, completed: true },
    '2366bDu76666676543': { company: 'Company 67', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '35e6b5D4444b9': { company: 'Company 68', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '122b44bD4b8': { company: 'Company 69', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '91pqpaqpDSq9': { company: 'Company 70', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '6zjSDzj510': { company: 'Company 71', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '1J': { company: 'UiPath', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '2J': { company: 'Face++', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '3J': { company: 'Daily Harvest', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    'J4': { company: 'Allbirds', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '5J': { company: 'MM.LaFleur', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '46': { company: 'Ant Financial', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '37': { company: 'Block.one', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '48': { company: 'SenseTime', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '39': { company: 'Lending Point', status: 'completed', amount: 456780, completed: true },
    '140': { company: 'Credit Karma', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '141': { company: 'Bitmain', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '14F2': { company: 'Artsys360', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '1FD3': { company: 'Helix', industry: 'consumer', amount: 200000, completed: false },
    '1FD4': { company: 'Echodyne', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '1F5': { company: 'Ghostwave', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    '1DF6': { company: 'Lunewave', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '1FD7': { company: 'Sollis Therapeutics', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '1DF8': { company: 'Relievant', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    'DF654yhj7u510': { company: 'Assure Services', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '33DF45nw3': { company: 'Company 1', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '454bDFt5b644': { company: 'Company++', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '45bt54DF525': { company: 'Company 2', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '6b45tb53FD45': { company: 'Company 3', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    'D344tb556': { company: 'Company 4', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '8D8tersbt594': { company: 'Company 5', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33Du78576539': { company: 'Company 6', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '2n4Dnw6y33': { company: 'Company 7', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '23b4Dy5v6bw4555': { company: 'Company 9', status: 'completed', amount: 456780, completed: true },
    '236yuD56ynb76543': { company: 'Company 10', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '3w54ytD3b5eb9': { company: 'Company 11', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '5wye56yDnb5wy1': { company: 'Company 12', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '6wrybe56Deryb51': { company: 'Company 13', industry: 'consumer', amount: 200000, completed: false },
    '14wb4by66Dby6eb00': { company: 'Company 14', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '1wbw4vtw54Dbtw45bt6': { company: 'Company 15', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    '24w4btw4563Dw45634re56565': { company: 'Company 16', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '12tw4tbw4etwD428': { company: 'Company 17', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    'A91wbt5ywt9': { company: 'Company 18', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '6A5w5ybw5t10': { company: 'Company 19', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '33Aw45tyb3': { company: 'Company 20', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '44tAygh65454': { company: 'Company 21', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    'w45bA65wt4by6bw4': { company: 'Company 22', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '6qbw4Atv55b345': { company: 'Company 23', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '34wb5bAq4vw56': { company: 'Company 24', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88w4v5rAt594': { company: 'Company 25', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33w5v4etA539': { company: 'Company 26', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '23v5w45b5An6yu7yb3': { company: 'Company 27', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '23by56t555A': { company: 'Company 28', status: 'completed', amount: 456780, completed: true },
    '23v5rye6765A43': { company: 'Company 29', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    'R3t1q1q19': { company: 'Company 30', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '3Rv3vv3b3b': { company: 'Company 31', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    '6eRrggbrgrg51': { company: 'Company 32', industry: 'consumer', amount: 200000, completed: false },
    '144R5y6jtrgf00': { company: 'Company 33', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    '165yR6hy': { company: 'Company 34', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    'mmm45R634re56565': { company: 'Company 35', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    'vtgStr': { company: 'Company 36', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '19gtret19': { company: 'Company 37', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '165tgsrgtg10': { company: 'Company 38', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '13sdrgthtg33': { company: 'Company 39', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '15vwewftc': { company: 'Company 40', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '1252v4t4vr5': { company: 'Company 41', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '6FD3t5btht45': { company: 'Company 42', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '34Fbtt4eb56': { company: 'Company 43', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '88Fbt594': { company: 'Company 44', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '33SDbe4t4et39': { company: 'Company 45', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '2weSD4tb33': { company: 'Company 46', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    '235eSbw4tgy43bt55': { company: 'Company 47', status: 'completed', amount: 456780, completed: true },
    '23gbSDDS676543': { company: 'Company 48', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    'L3444449': { company: 'Company 49', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    'L1tbe45tynh': { company: 'Company 50', status: 'meeting set', industry: 'frontier tech', amount: 5000000, completed: false },
    'L65e5no9ppo1': { company: 'Company 51', industry: 'consumer', amount: 200000, completed: false },
    'L14b8irib00': { company: 'Company 52', status: 'completed', industry: 'frontier tech', amount: 800000, completed: true },
    'L16vr7brrt': { company: 'Company 53', status: 'completed', industry: 'frontier tech', amount: 100000, completed: true },
    'Lxxx4re56565': { company: 'Company 54', status: 'looking into', industry: 'frontier tech', amount: 1300000, completed: false },
    '12K2wertwrt8': { company: 'Company 55', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '95Kt55519': { company: 'Company 56', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '65K45tv32vc2110': { company: 'Company 57', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false },
    '32Kc323c333': { company: 'Company 58', status: 'created', industry: 'enterprise & ai', amount: 42456435636, completed: false },
    '443Kvvb3b4': { company: 'Company 59', status: 'completed', industry: 'enterprise & ai', amount: 2000000, completed: true },
    '54bK4b525': { company: 'Company 60', status: 'pending', industry: 'consumer', amount: 500000, completed: false },
    '634Kb4b45': { company: 'Company 61', status: 'created', industry: 'consumer', amount: 5000000, completed: false },
    '345Kb4tbyr56': { company: 'Company 62', status: 'completed', industry: 'consumer', amount: 900000, completed: true },
    '886K765nj89n94': { company: 'Company 63', status: 'completed', industry: 'fintech & blockchain', amount: 200000, completed: true },
    '3b5K6n5be339': { company: 'Company 64', status: 'pending', industry: 'fintech & blockchain', amount: 200000, completed: false },
    '23wKb5y5b63': { company: 'Company 65', status: 'completed', industry: 'fintech & blockchain', amount: 1975000, completed: true },
    'w4bK566': { company: 'Company 66', status: 'completed', amount: 456780, completed: true },
    '236K6bu76666676543': { company: 'Company 67', status: 'meeting set', industry: 'fintech & blockchain', amount: 2000000, completed: false },
    '35eK6b54444b9': { company: 'Company 68', status: 'completed', industry: 'fintech & blockchain', amount: 2450000, completed: true },
    '122Kb44b4b8': { company: 'Company 69', status: 'looking into', industry: 'healthcare', amount: 7000000, completed: false },
    '91pKqpaqpq9': { company: 'Company 70', status: 'looking into', industry: 'healthcare', amount: 2000000, completed: false },
    '6zjKzj510': { company: 'Company 71', status: 'looking into', industry: 'fintech & blockchain', amount: 1000000000, completed: false }
  }

  myKeys = []

  groupedKeys = []

  formattedKeys = []

  groupByCategory = 'industry'

  tableCategorys = ['consumer', 'fintech & blockchain', 'enterprise & ai', 'frontier tech', 'healthcare']

  constructor() {
    // this.add100000Deals()
    this.generateKeys()


  }

  generateKeys() {
    this.myKeys = Object.keys(this.myDeals)
    this.groupByIndustry()
    console.log(`Listing ${this.myKeys.length} Deals`)
  }

  add100000Deals() {
    for (let i = 1; i <= 100000; i++) {
      this.myDeals[`VSCDK${i}`] = {
        company: `Company VS${i}`,
        status: 'new',
        industry: 'other',
        amount: i * 1000,
        completed: false
      }
    }
    this.generateKeys()
  }

  groupInRandomSizedGroups() {
    for (let i = 0; i < this.myKeys.length; i++) {
      let random10 = Math.floor((Math.random() * 10) + 1)
      let newGroup = []
      for (let x = 0; x < random10; x++) {
        newGroup.push(this.myKeys[i + x])
      }
      this.groupedKeys.push(newGroup)
      i += random10
    }
    this.groupedKeys.pop()
    console.log(this.groupedKeys)
  }

  groupByIndustry() {
    let updatedGroupedDealKeys = []
    this.tableCategorys.map(category => {
      let filteredDeals = this.myKeys.filter(dealKey => this.myDeals[dealKey][this.groupByCategory] === category)
      updatedGroupedDealKeys.push(filteredDeals)
    })
    this.groupedKeys = updatedGroupedDealKeys
    this.formatKeys()
  }

  formatKeys() {
    let newFormattedKeys = []
    for (let i = 0; i < this.groupedKeys.length; i++) {
      newFormattedKeys.push({
        category: this.tableCategorys[i],
      })
      newFormattedKeys.push(this.groupedKeys[i])
    }
    this.formattedKeys = [].concat.apply([], newFormattedKeys)
  }

  sort(field) {
    console.log('sorting myDeals')

    for (let i = 0; i < this.groupedKeys.length; i++)
      this.groupedKeys[i] = this.groupedKeys[i].sort((keyA, keyB) => {
        let fieldA = this.myDeals[keyA][field] === undefined ? 'ZZZ' : this.myDeals[keyA][field].toUpperCase();
        let fieldB = this.myDeals[keyB][field] === undefined ? 'ZZZ' : this.myDeals[keyB][field].toUpperCase();
        if (fieldA < fieldB) {
          return -1
        }
        if (fieldA > fieldB) {
          return 1;
        }
        return 0;

      })
    this.formatKeys()
  }

  isObject(item) {
    return typeof item === 'object' ? true : false
  }


}
