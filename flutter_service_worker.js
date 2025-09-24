'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "add9573d0bdbe6b511957d850d7ceb80",
".git/config": "6abdf7ab118b984f97281fadbc2f047a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dec3d8a3ee9f0dc942af5602648903d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08a3455b4d776b2f66874b719635256e",
".git/logs/refs/heads/main": "374d66f604417fb6fc28ff9e45c5c8b0",
".git/logs/refs/remotes/origin/main": "4c02c3f9e1ec0002427db9afa0fecbd8",
".git/objects/00/ba056d9002d386f2728ca5e170fcd4f241f6b1": "e47dd55e2aacfebbcf5113d775da3318",
".git/objects/02/0953a149983a7565d376461699b8422a7a12ff": "c4d0752e0db94fd64780f9ae3268a4ac",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/7448ce9b32537d07d2ce1c297f4f25a938ec12": "da558a537ab341e35a4b4f35e6948c75",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/0b/10f46173e0e8d37d890407fcfa538f2836acb6": "330bbb3ea53077b405fe83160f3439b1",
".git/objects/0b/2f872bd0e2b22c84a46e2d41d8020b753a80fa": "091b01b88c2412fc62bacb6c7b36230f",
".git/objects/0d/394a1680f9288d35265e25ea8bd004feb7c603": "695956a3b0f32f24a0737dc3f6d56df6",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/12/9b76f05b60690fe03ec77175d88bf01b176401": "95e95d6de7e9620077cedd6920d91496",
".git/objects/15/e24c17adced433faa7686c4f5c69ffe9e45863": "9b9a0d0e514cbf1c2d360f47433fbeb1",
".git/objects/16/e9c274aa56c98b55ca30c51c797087ffd0daa5": "d84a5301b7e823a785dbb704949edddf",
".git/objects/18/8c27b8f16b1be04c39dd679835734e230c81b7": "ad5c1d9e90ad23745087d6d4f535b415",
".git/objects/18/bfd30bdddbc8e40c4493dfc1b80b4686b53d5e": "e1e26281973d33ba379e93dd7cef4eb6",
".git/objects/1c/39ef5280de699b70d4a614f4935aa2a5cb045b": "0b7680f860dbd7b711160155c2c23316",
".git/objects/1e/50487aca89190d97bd4113ca4e07cbb32e60bb": "18b4607a97656f7f156aa74bdabd3659",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/25/7206e88a2496601672ab32bea05b49dea45d50": "8f497b30916d82323a00b3c02fb022f6",
".git/objects/28/d1e4351ffefbf5c357f0218f80d8a7c4464fc3": "352c42aaa913c607961d4a22f3dc43f4",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/37/4dbcab09009696af7d644c9d3d1738bb735d16": "d407aad333d92b6929b88d9f5c07ce69",
".git/objects/38/df5ea62fa758ab81ce181969c9676dd10ea497": "18e5fad713b7f26da9e1eb20be58c6f3",
".git/objects/39/1e14860d5cf177c0954ac93794a0d681f3e064": "6ecf87f1059bb4f0eb3ee824f35a355b",
".git/objects/3b/33faa2c055cee87f1c91c63123e3e59db98466": "9f8f6f6273f5b2f46c93a0baa0a2480a",
".git/objects/3b/4d123a67dc484df05f56d474794bc4d90794f8": "0b1621bde46cc2caa0bc6485626cff55",
".git/objects/3e/632357fd4db8311333d145fbf2201824dfe785": "67950ab99b7b8c4f711f484699aa8ce9",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/822b85b9c4f408b1fb18d0b9b4176f170c22b1": "243a737eed02884841ecd95994ea680c",
".git/objects/41/ad642ba7a74cc49ff26c26ad9be3ad4bf962e7": "2f78451cb3c8f444cf9cbb2a0f9fa54f",
".git/objects/44/04dd2255f4ec10ca755916ddac0c386c383b86": "86cb507922801d92bcef2825afbc0c86",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/49/58c9e9a601140e7e7f91ee829b0ef32160cd6d": "056d2f699bdc8467f32e06bc5f0f0dab",
".git/objects/52/835d0ea45f35880883fc3b0de633881febfc60": "c494b75b809c4c1668dfd333853cc32c",
".git/objects/55/150852616b066688149c4b997e23e306067b35": "cd75496f082beaaa28fc6a5e04d987d0",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/58/687d36bb774643dbd1837839078a7009c43e29": "72602f61da8776060eaccdb2bac9e721",
".git/objects/5a/ea6ab830eb9c834929b22b663cf46213a55ac8": "ef3846fce3a16b72e790df0f8af278a2",
".git/objects/5c/abfd3cd37828e5b2f409ac8f270ddacf09ddb9": "b40d5f981a3aa3a03eeb50d9beba664f",
".git/objects/5e/d89d7f75b90f325b4e849327566fe2395ac741": "dcf25e0ead4a2a990fccf903a01a84d9",
".git/objects/5f/b352db83b329a889f2ceb382b1e7bf16a8362a": "72f288ff30fc187eeed456032ee1971e",
".git/objects/5f/da67e13e8d4f375bda8a77d2d2a61c53cb17fe": "f3f616c1d02a69e3bdf74d59e96262f5",
".git/objects/62/cb935baa786da814749e32dc7892aaf43f0a0b": "b04ecf835fd7c8edde37fffce3fa569d",
".git/objects/64/d0e66c8615a74843e45892c79515fa60c5d6f2": "2d9164f7c1c8df2732288a419bee61b7",
".git/objects/65/97f9b869064647a76e0ecde6d4a7af5a87cc09": "7d5c4a9630bf9e790b30494c18c29ce3",
".git/objects/65/dac85bc61c2a8821f2b742bc50dfbec60deba9": "a9c1ba2a1acaeadeee28d804c41a814e",
".git/objects/66/2dd95e82e4b5bbe2b332579d985e4c81531b46": "8266fa833ef48ac1e40c047edd3736ff",
".git/objects/66/efdd6d64a157dfe4a02c2ca22f9752c12f05dc": "ebec8159845e0c47c4c7a4b1d8d95090",
".git/objects/69/5d43108c7bc5c84d40509871a8d5b4bd9a5ced": "98235b3d6f8b03b81fe82ecd3a3e6a4b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/ce0e9edec437ddd470a50d84aed402c09f3800": "808997eee346e6f86c698de0e5556aa5",
".git/objects/6b/2fba66e00d36e7ce221de161880ce7d5bbc0ab": "225939c25973091f005e308c1c2426ac",
".git/objects/6f/9937f6d103029e5e5f716e4cb6a1b0fd6031f9": "45c85a80a8717d6b4e7626ff85d05dde",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/95af93128dad6ef33a4707824d842d30fde3e2": "13a47def2f4c8850460907be37ee7d5e",
".git/objects/73/365a33edfa89a1a0d605731e0b5c378b919c8b": "bfe71855f8afbbaa8b151d7e15a3cd78",
".git/objects/78/8f4b108c0557670d6b125d2978e843b2859a86": "9205676953b9044565a773de77c95e50",
".git/objects/79/4351951d22e17e8d5385acf2beefa217b297e7": "67f553a0dbe65e403e541c00e364e292",
".git/objects/7a/4ed7d084e0527b0f8712c9f9207e96e97c72c8": "35f5deb1adfae859c21dfc7d35a3a029",
".git/objects/7e/d8100369a20a5a951034350c20a425790cf5b8": "c29d968970dfb4c4cda24149fe78cd1f",
".git/objects/82/95b7dba4798ccc063b12d301ad3886ebad70a6": "3819ca9430df5d559146849c33572a38",
".git/objects/85/250998b64348c57218f38bb6cc708b99965d38": "54b036030ad3ceca78bb88a5882471ca",
".git/objects/85/e75db299c0bab80d1fe59cd47a264fa2b092b4": "063f31558dbf17dc260a532bc6918484",
".git/objects/86/43aaef665f1d1377c3c8a6f47b346b0c428abc": "90143b21048b4b52d2923afa7d6e00a6",
".git/objects/86/648983a75a7b22be581beb6a9a6516c2f1cf0b": "c914aee508842b9a70fe10f4e31a3867",
".git/objects/87/7cdfd69786dab77adf90a95b0ca150d2a0268a": "f39815a22d1c9f11bd548504f13b688f",
".git/objects/87/ca9bdcd17ddf4b08b4a1b93be13f49dbced02b": "482e3c75ddb3fb15075211f37eccc676",
".git/objects/87/cbb28a9f2765910745e20eb164a739306f2678": "11e1f553a054e3be00642579a4ea1db5",
".git/objects/88/b71319777a4108d59862799a1510e1390b9650": "48d08dd34256ab239a50377907effe2f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9f275836e7ed24fe67348e771dda8896cc8865": "607daefcaf36148c7f28bf6381228bbb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/6c813e184ba5394d54a8e3fcfec443bedb9bb1": "68a5480a921c781b34c04da8c6086b43",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/a9824f675071c4d3dbf1cff2fc56fe7b126a74": "3b37688b11d55e8053d0fec9ec9e557d",
".git/objects/92/cd4fcc27833a84af1e2784c11ed6f027254c57": "c5149ee2946df351b1e5da5729061f82",
".git/objects/93/ca7bf9292a271351fba5f9ebb91b521d512cc4": "fbfcdfb06681451dd072cf5d25150eb7",
".git/objects/98/aa6c3dec8e6341f2976257cc45a8082dccfab0": "7742c4b1c7561ea8c588aa1095f3f82e",
".git/objects/99/cb65485c725a7f01fcfba24132712a8c528be1": "ee14d09ca91194b5c25fb53cf9d63739",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/57b4179786b41dc4a69a54d6fcb421847bbeae": "5235e3d370da6593534f0996927a83ae",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/bfbf210b2e55cac40c54c52ad1f5dfdc408676": "3d346ab443abf74bb28346a28a5ca8ab",
".git/objects/a0/4fce2138e3e04617906c70cd36020a6a2de504": "5375ff5b670232b203b8fd17a3976f8f",
".git/objects/a3/495a01cdeeb75527461492c9f9c40fcfef2346": "e641308506b26b2dc14bc6807a8a1b68",
".git/objects/a8/6393a5c9707b0aa14eb96d4a5c3348fb8752c8": "e8dce82c0c55e2967c455e8beb6454ba",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/a9/05dbf20bf7ca2d3388e6a0aeb938b29f81affb": "309664c46f91fc6cc3291fc5b79b78a1",
".git/objects/a9/3545503bb9eceb2e32d9bd18e31bcc3e3ecf4f": "3dcea9a30870d210a6ff09507ae9983c",
".git/objects/aa/644383c562abb6990a57680ad97da93a8502a3": "62d018874bb2d6b6670c909dbb6b3d0c",
".git/objects/ad/d49f10a3e3aa1392f451b161f9fc70b768245a": "18a1e0913bb6d74e76c1b2a8eb739074",
".git/objects/b3/31da7ce5cec3cf0cf53811df92c210efb33f22": "9ba3c956cc90d3aabf97bc3ce3c1dfe7",
".git/objects/b4/db5ecf918f38b7728981e8477445d844efcf65": "c537ff1b5b1e5e9dbfd1714206cee144",
".git/objects/b5/fc85bcacc7750439937ae0777c1b36718d18c0": "f266778fb27e75934ad4c7d205cc6806",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/328f1efcdcaa9087e79bff9858be971128e44b": "1a93a97d06deae743fef181c9f617d06",
".git/objects/b9/4af6d2d9dd6a46796f4b772bfae309e7a18945": "06cf8b5aa4c38bde344d7a40e503cac1",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/e927e34257c7a8a744071d388fc53cdfc67754": "0aa6e7124ca8ea1d2b6cf1a420ab2c7e",
".git/objects/bb/fd86532292d5dba1cf8226653acdd9eda678d3": "4580b661177b9885fb17f08b6e0acc28",
".git/objects/bf/1910373a54acafbc43b23d781d4c1e35536a4f": "36d0bfb84d0155575e368be6451f63d6",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c3/1a9686fc890d20a7269c7e09d41926a071be39": "5ae4cd854b986de7f62e5268bc802cd8",
".git/objects/c3/f392667187ad40b068c4f46c353e09fa091618": "5423ac7118f8c26394ca72bab55861d7",
".git/objects/c5/23beb4d4cbbd175635abb243ceefde48428fd2": "aed23eea66f28b44465812ef0efead63",
".git/objects/c6/ac168fdd140d06dd18ded8ad86014be5a39cc6": "87f4b97c24587da365b5bef5728fe918",
".git/objects/c6/c4999269df8fa9b1494233830a0d30a66def8c": "44b554acdfa990bec19886efc96e3622",
".git/objects/c7/4849ce9bbea2b63b9a9fdc10fa86f8d95e9261": "89e3a8a8c29fbf9d12adf4edeb4ff220",
".git/objects/c9/45d54d9704fa8b02eb13dc56d1d78ea13b934e": "8798a4374cd8d7b453c5fe571a49e551",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/ab4c895a3790f48adbcbaa51696393316b5e4e": "d1e8d805bdc64dbb600cb49b94b7e6b1",
".git/objects/cd/d93193293c34d716b8fb10681e79b4fbfb11d7": "9116c6185c03dc943cc08bc4c667e089",
".git/objects/cf/2cb6f098fa4e220c25fdab5aa9cfc2a0ee1da7": "3f71e563daee6a37eea25da37358ec19",
".git/objects/cf/796f6f5e970848f94223c98b4998bf72a17aed": "e6f56c04a2a25c44e1b723cd3c36a909",
".git/objects/cf/857af68a8c93fa549bb76547c263dc7bc14e73": "80d5576a06bd0ad2c29cf1f542a6ec79",
".git/objects/d0/e5132fa1eb6193ec1bad840d2b31abc3aaa96d": "0125542bee1705997e2241f537106070",
".git/objects/d2/948964b8c1dd4d3dfc7df3b54e98f206df0959": "dc138ba567f29ed138e26d631dbdfbf2",
".git/objects/d3/7ec2a1dd8eb3ab6397d1bb9fc2584bd9bdcbfe": "81dbbaf1f00684b78572df789292dee1",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d3/cc4594350b09fad93ff425c647b9fad6851f7f": "10bae4eb89361633e7eb2e64ecc8ce63",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/cffae8b9425e28a580af15d5b85f078ea94e12": "2ab2fd680ece204687e3cde2b6aa847d",
".git/objects/d9/b59186c42e41d20749eedcaa998f851dc2548b": "753c340602ba6258eab3787d6908e2f3",
".git/objects/db/80b59cf886c3c047f337b4b6850c5b53cb806b": "c915e273b319c3a777b87f4826fb01fb",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/ca3892c6947dd080c8d93f04865b25e324f863": "c1260a07452e548a2e23c51af017a6b1",
".git/objects/de/ab707eea78b891dc68a779b40f18cb52ee6528": "50fd7ae17734e3099fbaf39edac37bc3",
".git/objects/df/ec551fb3213e8d9ebab03a8ab83e862f4f3608": "b29bad98bbc6680328d8773f9e0a6f50",
".git/objects/e2/a1cdae7538814c0aa3b183efd65d65436ed1be": "a01d4578945fcf7cc3294e6f9d9fb44c",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e8/4bbdd26354da83cbd50b2aaecc68dab0aa5d8c": "7278eeb7b021f2bc04ad638664fa605e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/949a42a0feea4371a3dbfb3a2a9de538d3a649": "54e67ad118cdf50f9c448eb294cbab74",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9849f5b0ec71128b6796483ed78cd2500e1d6b": "337672d12104090e71e03ee6e909c3f9",
".git/objects/f2/dc53abd89673b76f22283d0c113222a4de615e": "a3dc12e47147fc8cbfe37b6a9e182c4c",
".git/objects/f3/95cc6d97654f2f4a31bd5b58a4416642c92359": "d57eff0d48d2dcf1401aa4d9c1d3da69",
".git/objects/f4/1eb0d220904ff704dbafff437dbaaa60fe545c": "157f071856c5fc64bb307d8a6595e2dc",
".git/objects/f8/c2a0d611a9af8cb910a254da10ba8d7da59b6b": "f1df3f54fb397a771611b964b73fc89a",
".git/objects/fa/310b85d0cadd943fff1eaaf997f5109c992c8a": "3ad364fe178c7347efa638dc8a04555e",
".git/objects/fa/681b47d476d9e8e96dc0547019613f7339859d": "27549bd58aae08d2554ee6b860fc7ba6",
".git/objects/fb/933a2bf32d68fed531284765e54d44a189cf14": "57223a830633de6283425779dc77deee",
".git/objects/fb/aa3d565ff9c6ad74331c8810f337370388a9eb": "89cb494454c39f0fa71cc9672f3aa961",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fe/4035aa579e30c9e1ea6b42364c322d942398ba": "fd84fec772543e298a478a1a3d96f051",
".git/refs/heads/main": "a4ba417baefd4decd27153345c7d70dc",
".git/refs/remotes/origin/main": "a4ba417baefd4decd27153345c7d70dc",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "8134b51c441249e25f4b529a337375ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d6ee81cf894dd7c310470a0c3ab71081",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b316c962ae309dab2f519b3b15103d1",
"/": "3b316c962ae309dab2f519b3b15103d1",
"main.dart.js": "b05297dede239987567ad537748ca9fa",
"manifest.json": "12f839420b5feb2fecdc83a460602af2",
"version.json": "779e3e0e9598d2fd200ff144bfddb775"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
