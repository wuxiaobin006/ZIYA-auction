/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : auc

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2020-09-29 09:57:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for location
-- ----------------------------
DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  KEY `province` (`province`) USING BTREE,
  KEY `city` (`city`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of location
-- ----------------------------
INSERT INTO `location` VALUES ('广东', '广州');
INSERT INTO `location` VALUES ('广东', '深圳');
INSERT INTO `location` VALUES ('广东', '珠海');
INSERT INTO `location` VALUES ('广东', '汕头');
INSERT INTO `location` VALUES ('广东', '佛山');
INSERT INTO `location` VALUES ('广东', '韶关');
INSERT INTO `location` VALUES ('广东', '湛江');
INSERT INTO `location` VALUES ('广东', '肇庆');
INSERT INTO `location` VALUES ('广东', '江门');
INSERT INTO `location` VALUES ('广东', '茂名');
INSERT INTO `location` VALUES ('广东', '惠州');
INSERT INTO `location` VALUES ('广东', '梅州');
INSERT INTO `location` VALUES ('广东', '汕尾');
INSERT INTO `location` VALUES ('广东', '河源');

-- ----------------------------
-- Table structure for macount
-- ----------------------------
DROP TABLE IF EXISTS `macount`;
CREATE TABLE `macount` (
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of macount
-- ----------------------------
INSERT INTO `macount` VALUES ('123', '123');
INSERT INTO `macount` VALUES ('124', '123');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `newsTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `publishDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `newsPicturePath` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `newsP1Title` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `newsP1` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `newsP2Title` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `newsP2` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `newsP3Title` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `newsP3` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `newsP4Title` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `newsP4` text CHARACTER SET utf8 COLLATE utf8_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('今日热点', '时间：2019-12-25 16:15:20', '/images/gif1.gif', '“岭南公益慈善学院”今年将招生300人', '在成立仪式上，广州市民政局党组成员、副局长韦锦坚和广州岭南教育集团董事周兰庆共同为“岭南公益慈善学院”揭牌。与此同时，学院成立专业委员会向专业委员会委员颁发聘书，并将广州市公益慈善联合会、信息时报爱心档案、广州市广益联合募捐发展中心等与会机构列为岭南公益慈善学院学生的实习实训基地。', '学徒式教学，培养实干人才', '在岭南公益慈善学院人才培养研讨会上，三十余名专家和公益人献言献策，为培养专业化的慈善人才贡献自己的力量。在讨论环节中，有公益人提出了“在整个教学过程中，希望学生可以多些实践，免得他们以后到公益组织工作之后，觉得自己学的东西跟工作搭不上边。”', '整合各方资源，考虑学生发展前景', '大学学习的专业对于学生来说，或许就是决定一生命运的事情。在研讨会上，专业委员会小组除了探索岭南公益慈善学院的教学模式之外，还对学生的发展前景提出自己的建设性意见，例如：有专家提出公益机构可以提前招收这些学生作为实习生，按照公益机构的需求培养学生;培养学生的公益心以及增强学生领导力，即使今后学生去了其他领域，也能带领更多人加入公益行列;慈善公益法律知识应该列为重点教学内容，避免学生做好事意外触犯法律……', '今年将在广东招300高考生，实行学徒式教学，培养实干人才', '在圣诞节这一天，一群热爱公益的人决定要做一件认真的好事。2018年4月1日下午，由广州市民政局指导，广州岭南教育集团、灵山慈善基金会、广州市公益慈善联合会、广州市社会创新中心、人人公益等多家机构联合倡仪发起，由广东省岭南教育慈善基金会筹集资金，与广东岭南职业技术学院开展“校社合作”模式的公益慈善学院——岭南公益慈善学院正式揭牌成立。这标志着广东省拥有了一个真正意义上的公益慈善学院。');
INSERT INTO `news` VALUES ('冬至南汤圆VS北饺子', '时间：2019-12-21 09:05:20', '/images/冬至.jpg', '南方冬至VS北方冬至', '冬至，作为24节气中最早被确定的一个，有着特殊的含意。根据历史记载，古人认为自冬至开始，天地阳气开始兴作渐强，代表下一个循环开始，是大吉之日。冬至，俗称“冬节” ， 是中国农历中一个重要的节气。这一天，北半球白天最短、黑夜最长。过了冬至，白天会变长，黑夜会变短。', '冬至来临：南方吃汤圆 北方品饺子', '这一天，各地还有不同的风俗习惯。北方人说“冬至饺子夏至面” ， 南方人说“冬至是妈妈口中吃了汤圆又长一岁的甜蜜”。', '冬至北方习俗', '每年农历冬至这天，不论贫富，饺子是必不可少的节日饭。谚云：“十月一，冬至到，家家户户吃水饺。”这种习俗，是因纪念“医圣”张仲景冬至舍药留下的。冬至吃饺子，是不忘“医圣”张仲景“祛寒娇耳汤”之恩。至今南阳仍有“冬至不端饺子碗，冻掉耳朵没人管”的民谣。', '冬至南方习俗', '吃汤圆在明、清时期已经约定俗成。在冬至这天，要“作粉圆”或“粉糯米为丸”。这些在史料上也有正式的记载，称“冬至，粉糯米为丸，名‘汤圆’”。做好汤圆后要祀神祭祖，而后合家围吃汤圆，叫做“添岁”。所以，冬至吃汤圆，古而有之。现代医药学研究结果表明，汤圆中的黑芝麻有显着的医疗保健作用。黑芝麻中的维生素E非常丰富，可延缓衰老，有润五脏，强筋骨、益气力等作用，强壮身体，益寿延年，滋补肝肾，润养脾肺，对掉发白发有食疗作用。山楂味酸甘，性微温，有开胃消食、化滞消积、活血散瘀、化痰行气的作用。核桃性温、味甘，有健胃、补血、润肺、养神等功效。《神农本草经》将核桃列为久服轻身益气、延年益寿的上品。');
INSERT INTO `news` VALUES ('Marry Christmas', '时间：2019-12-21 09:05:20', '/images/Christmas.jpg', '妙趣横生，打卡圣地', '据悉，今年青岛方特将以“雪人小镇”为主题打造一系列彷佛童话故事般梦幻的场景，纷纷飞雪、华丽圣诞树、巨形心愿球等，将让园区展现令人沉醉的圣诞风情。值得一提的是，当你踩在晶莹透亮的“雪地”上时，像极了小时候冬天的感觉。格外逼真的雪地让圣诞的氛围更加浓厚，整个“雪人小镇”也将成为游客拍照打卡的绝佳地点，“小仙女们”快带上朋友们拍起来吧!', 'HIGH ON STAR 2 LIPS SET耀夜星河礼盒100元起拍！', 'YSL圣诞耀夜星河限定系列产品全新上市,坠入爱恋星河。 耀夜星河迷你礼盒全新上市,星动首秀。以点缀闪亮雪花图案的黑白色收藏家礼盒奢华呈现。', '子牙陪你过圣诞', '圣诞，是坐着雪橇的圣诞老人、是挂在床头的红袜子、是一棵挂满礼物的常青树、是用冻得通红双手堆起来的雪人。圣诞，其实更是捧在手心的礼物和从口中说出的一句:“Merry christmas”精心装饰选好的礼物，满怀期待的等待对方开心的表情，这也正是圣诞的意义呀~现在,来到ZIYA钓鱼网拍圣诞好礼，更可以领取Xmas主题宣传单进行礼品包装，参与活动，还有机会获得ZIYA圣诞大礼包哦~', '你的圣诞好礼已送达，请注意查收', '期待2020年到来的你，是否也在期待圣诞老人的光临，期待他会在寂静祥和的平安夜里用礼物填满你床头的袜子?你可能还不知道，青岛方特梦幻王国即将推出为期5天的圣诞主题活动，在这个岁末带给你一场充满梦幻与童真的圣诞之旅。12月21日-12月25日，“雪人小镇”、“圣诞老人派礼”、巨型霓虹圣诞树、梦幻烟花秀等精彩活动与演出，都将在ZIYA与你见面。');
INSERT INTO `news` VALUES ('加油2020！', '时间：2019-12-21 09:05:20', '/images/2020.jpg', '新的一年，子牙与你同在', '新的一天新的开始!做好准备去迎接美好的开始吧!但是前进的道路是崎岖坎坷的需要你的个人努力和争取!你什么困难都不要害怕，因为你是最优秀的!新的一年，从对自己加油努力开始。', '无论你今天怎么用力，明天的落叶还是会飘下来，世上有很多事是无法提前的，活在当下，正向提升。', '要做一个积极勇敢乐观的追梦人，永远不说消极的话，只有坚韧不拔向着目标奋进，成功后将在不远处等待着你的到来。今天的生活状态，是由三年前的选择决定的，所以要做好当前选择;也许你既没有资源，也没有社会地位，但只要有信心和不屈的精神，你会比别人走得更远!', '梦想是一束光。', '没有谁的幸运，凭空而来，只有当你足够努力，你才会足够幸运。这世界不会辜负每一份努力和坚持。时光不会怠慢执着而勇敢的每一个人!生活不是一场赛跑，生活是一场旅行，要懂得好好欣赏每一段的风景。不要只因一次失败，就放弃你原来决心想达到的目的。它能将我们的人生照亮，相信有许多人和我一样，正在追寻梦想的路上。没有任何理由，能够阻挡我们追寻梦想的脚步。今生能够找到我的梦想，我是幸福的，充实的。', '没有理所当然的成功，也没有毫无道理的平庸。生活可以漂泊，可以孤独，但灵魂必须有所归依。耐心点，坚强点;总有一天，你承受过的疼痛会有助于你。', '具有成熟心灵的人不会陷于自己的困难当中，而是勇敢的去面对它、接受它，然后想办法加以克服、解决。您不图舒适和轻松，承担起艰巨的重负，在别人望而却步的地方，开始了自己的事业。我由衷地预祝您成功!');

-- ----------------------------
-- Table structure for paimai
-- ----------------------------
DROP TABLE IF EXISTS `paimai`;
CREATE TABLE `paimai` (
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `start` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `end` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of paimai
-- ----------------------------
INSERT INTO `paimai` VALUES ('圣诞狂欢', '2019-12-25 0:0:0', '2020-1-1 0:0:0');
INSERT INTO `paimai` VALUES ('元旦狂欢', '2019-12-31 0:0:0', '2020-1-1 0:0:0');
INSERT INTO `paimai` VALUES ('双旦狂欢', '2019-12-31 0:0:0', '2020-1-1 0:0:0');
INSERT INTO `paimai` VALUES ('111', '2019-12-31 16:14:0', '2020-1-1 0:0:0');
INSERT INTO `paimai` VALUES ('公益拍卖', '2020-2-1 0:0:0', '2020-4-1 0:0:0');
INSERT INTO `paimai` VALUES ('哈哈哈哈哈', '2020-5-1 0:0:0', '2020-6-1 0:0:0');

-- ----------------------------
-- Table structure for shangpin
-- ----------------------------
DROP TABLE IF EXISTS `shangpin`;
CREATE TABLE `shangpin` (
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sPrice` int(10) DEFAULT NULL,
  `sImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `isV` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `owner` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of shangpin
-- ----------------------------
INSERT INTO `shangpin` VALUES ('子牙公益', '跑车1', '1100', '/upload/COVER_Vision-GT.webp', 'no', 'none');
INSERT INTO `shangpin` VALUES ('子牙公益', '跑车2', '2100', '/upload/car.webp', 'no', 'none');
INSERT INTO `shangpin` VALUES ('公益拍卖', '跑车', '1123', '/upload/auction1.jpg', 'no', 'none');
INSERT INTO `shangpin` VALUES ('孩子', '阿松大', '1123', '/upload/1.png', 'no', 'none');
INSERT INTO `shangpin` VALUES ('测试', '商品一', '1123', '/upload/car.webp', 'no', 'none');
INSERT INTO `shangpin` VALUES ('测试', '商品1', '1123', '/upload/background.jpg', 'no', 'none');
INSERT INTO `shangpin` VALUES ('特色他', '商品', '124123', '/upload/banner1.PNG', 'no', 'none');
INSERT INTO `shangpin` VALUES ('圣诞狂欢', '圣诞驯鹿号', '23009', '/upload/COVER_Vision-GT.webp', 'no', '1001');
INSERT INTO `shangpin` VALUES ('元旦狂欢', '商品1', '1010', '/upload/auction1.jpg', 'no', 'undefined');
INSERT INTO `shangpin` VALUES ('元旦狂欢', '商品2', '1010', '/upload/car.webp', 'no', 'none');
INSERT INTO `shangpin` VALUES ('元旦狂欢', '商品3', '7010', '/upload/COVER_Vision-GT.webp', 'no', 'none');
INSERT INTO `shangpin` VALUES ('元旦狂欢', '商品4', '10', '/upload/news1.webp', 'yes', 'none');
INSERT INTO `shangpin` VALUES ('双旦狂欢', '商品1', '10', '/upload/2020.jpg', 'yes', 'none');
INSERT INTO `shangpin` VALUES ('双旦狂欢', '商品2', '10', '/upload/background.jpg', 'yes', 'none');
INSERT INTO `shangpin` VALUES ('双旦狂欢', '商品3', '10', '/upload/banner2.PNG', 'yes', 'none');
INSERT INTO `shangpin` VALUES ('圣诞狂欢', '圣诞老人臭袜', '2009', '/upload/news3.jpg', 'no', 'none');
INSERT INTO `shangpin` VALUES ('圣诞狂欢', '公仔', '1099', '/upload/monster.gif', 'no', 'undefined');
INSERT INTO `shangpin` VALUES ('圣诞狂欢', '11', '9', '/upload/login.png', 'yes', 'none');
INSERT INTO `shangpin` VALUES ('公益拍卖', '商品1', '10', '/upload/news3.jpg', 'yes', 'none');
INSERT INTO `shangpin` VALUES ('公益拍卖', '商品2', '10', '/upload/Christmas.jpg', 'yes', 'none');
INSERT INTO `shangpin` VALUES ('公益拍卖', '商品', '12', '/upload/monster.gif', 'yes', 'none');

-- ----------------------------
-- Table structure for usermessage
-- ----------------------------
DROP TABLE IF EXISTS `usermessage`;
CREATE TABLE `usermessage` (
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `level` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE,
  KEY `province` (`province`) USING BTREE,
  KEY `city` (`city`) USING BTREE,
  CONSTRAINT `usermessage_ibfk_1` FOREIGN KEY (`province`) REFERENCES `location` (`province`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `usermessage_ibfk_2` FOREIGN KEY (`city`) REFERENCES `location` (`city`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of usermessage
-- ----------------------------
INSERT INTO `usermessage` VALUES ('111111', '111111', '广东', '广州', 'aaaaaa', '111111', '普通会员');
INSERT INTO `usermessage` VALUES ('666666', '666666', '广东', '佛山', '123', '666666', '黄金会员');
