
// Botão para começar
// Na tela final botão para voltar ao inicio
// Contador de tempo na tela do jogo
// Contador de palavras acertadas na tela do jogo
// Indicar tempo extra adicionado
// Apitar/mudar cor quando estiverem faltando 5s
// Letra errada fica vermelha
// Letra certa fica verde

const wordList = ['abs','act', 'add', 'age', 'air', 'all', 'alt', 'and', 'ant', 'arc', 'arm', 'ask', 'axe', 'bag', 'bar', 'bed', 'bee', 'big', 'bin', 'bit', 'box', 'bow', 'bun', 'bye', 'buy', 'bus', 'cab', 'car', 'cat', 'cow', 'cry', 'cue', 'cup', 'day', 'dew', 'dig', 'dog', 'dry', 'due', 'dye', 'ear', 'eat', 'egg', 'end', 'eye', 'far', 'fat', 'fax', 'fee', 'few', 'fig', 'fit', 'fix', 'fur', 'fly', 'fog', 'fun', 'gap', 'gas', 'gel', 'gig', 'gut', 'guy', 'gym', 'hat', 'hit', 'hop', 'hot', 'how', 'hug', 'ice', 'ill', 'ink', 'inn', 'ion', 'jam', 'jar', 'jaw', 'jet', 'job', 'joy', 'key', 'kid', 'kit', 'lab', 'law', 'lay', 'let', 'lie', 'lip', 'lid', 'low', 'log', 'lit', 'mad', 'map', 'may', 'men', 'mix', 'mug', 'nap', 'new', 'not', 'now', 'nut', 'oak', 'odd', 'off', 'oil', 'old', 'one', 'own', 'owl', 'pan', 'paw', 'pay', 'pea', 'pit', 'pop', 'put', 'rag', 'run', 'rap', 'rat', 'raw', 'rib', 'rim', 'row', 'rug', 'rye', 'sad', 'sap', 'sea', 'say', 'see', 'she', 'shy', 'sew', 'sit', 'sun', 'sum', 'tag', 'tap', 'tan', 'tax', 'tea', 'tee', 'tip', 'too', 'tow', 'toe', 'toy', 'try', 'two', 'vow', 'war', 'wax', 'web', 'wet', 'who', 'why', 'win', 'wow', 'yes', 'you', 'zip', 'zoo', 
'able', 'acid', 'also', 'area', 'army', 'away', 'baby', 'back', 'ball', 'band', 'bank', 'bath', 'bear', 'beat', 'beer', 'bell', 'belt', 'best', 'bird', 'blow', 'blue', 'boat', 'body', 'bone', 'book', 'born', 'boss', 'both', 'bowl', 'bulk', 'burn', 'bush', 'busy', 'call', 'calm', 'camp', 'card', 'care', 'case', 'cash', 'cast', 'chat', 'city', 'club', 'coat', 'code', 'cold', 'copy', 'crew', 'dark', 'date', 'data', 'dawn', 'deal', 'dear', 'deep', 'desk', 'dial', 'diet', 'disk', 'done', 'door', 'down', 'draw', 'drop', 'dual', 'dust', 'duty', 'each', 'earn', 'easy', 'edge', 'else', 'even', 'ever', 'exit', 'face', 'fact', 'fair', 'fall', 'farm', 'fast', 'fear', 'feed', 'feel', 'feet', 'file', 'film', 'find', 'fire', 'fish', 'flat', 'flow', 'food', 'free', 'fuel', 'from', 'game', 'gift', 'girl', 'glad', 'give', 'gold', 'goal', 'good', 'gone', 'grey', 'grow', 'golf', 'hair', 'half', 'hall', 'hand', 'hang', 'hard', 'have', 'head', 'heat', 'help', 'here', 'hero', 'high', 'hill', 'hour', 'hole', 'huge', 'hurt', 'idea', 'inch', 'iron', 'item', 'jump', 'jury', 'join', 'just', 'keen', 'kick', 'kind', 'king', 'knee', 'know', 'lack', 'lady', 'last', 'late', 'left', 'less', 'life', 'link', 'list', 'live', 'load', 'lock', 'long', 'look', 'loss', 'love', 'luck', 'mail', 'main', 'make', 'many', 'meal', 'mean', 'meat', 'meet', 'menu', 'milk', 'mind', 'mine', 'miss', 'move', 'much', 'moon', 'more', 'name', 'navy', 'neck', 'news', 'nose', 'nice', 'note', 'only', 'open', 'over', 'page', 'pain', 'pack', 'pair', 'palm', 'park', 'pass', 'past', 'path', 'peak', 'pick', 'pink', 'play', 'plot', 'plan', 'pool', 'pure', 'pull', 'push', 'race', 'rain', 'rare', 'read', 'rely', 'rest', 'rich', 'ring', 'road', 'rock', 'risk', 'roll', 'roof', 'room', 'rose', 'safe', 'salt', 'seed', 'seek', 'sell', 'shop', 'sick', 'side', 'sign', 'size', 'skin', 'snow', 'soft', 'soon', 'song', 'stop', 'tale', 'talk', 'task', 'team', 'tech', 'tiny', 'text', 'thin', 'tour', 'town', 'tree', 'trip', 'twin', 'true', 'type', 'user', 'very', 'wait', 'wake', 'walk', 'warm', 'wash', 'wand', 'wave', 'week', 'west', 'wine', 'wing', 'wire', 'wish', 'word', 'work', 'year', 'yard', 'zero', 'zone',
'adult', 'agent', 'apple', 'award', 'birth', 'block', 'blood', 'board', 'brain', 'bread', 'brown', 'chain', 'chair', 'chest', 'child', 'class', 'cream', 'cover', 'coach', 'cross', 'cycle', 'dance', 'depth', 'doubt', 'draft', 'drama', 'dream', 'dress', 'drink', 'drive', 'earth', 'error', 'entry', 'event', 'faith', 'fault', 'fight', 'final', 'floor', 'frame', 'front', 'fruit', 'glass', 'green', 'group', 'guide', 'heart', 'horse', 'hotel', 'image', 'index', 'input', 'issue', 'judge', 'knife', 'layer', 'limit', 'level', 'light', 'lunch', 'metal', 'model', 'month', 'music', 'might', 'noise', 'north', 'nurse','order', 'other', 'owner', 'paper', 'party', 'peace', 'pilot', 'pitch', 'plane', 'plant', 'power', 'prize', 'proof', 'queen', 'right', 'river', 'round', 'scope', 'score', 'sense', 'shape', 'sheet', 'share', 'skirt', 'shock', 'sleep', 'skill', 'smile', 'south', 'sport', 'staff', 'stage', 'stock', 'stone', 'study', 'stuff', 'style', 'sugar', 'table', 'taste', 'theme', 'thing', 'title', 'total', 'touch', 'tower', 'track', 'train', 'trial', 'trust', 'union', 'unity', 'value', 'video', 'visit', 'watch', 'water', 'white', 'woman', 'world', 'youth',
'abroad', 'access', 'accept', 'across', 'action', 'advice', 'affect', 'afford', 'afraid', 'always', 'almost', 'animal', 'amount', 'answer', 'anyone', 'anyway', 'appeal', 'around', 'arrive', 'artist', 'aspect', 'attack', 'attend', 'author', 'beauty', 'battle', 'before', 'behind', 'belief', 'better', 'beyond', 'bottle', 'budget', 'button', 'camera', 'career', 'castle', 'casual', 'center', 'change', 'choice', 'circle', 'column', 'common', 'coffee', 'corner', 'couple', 'credit', 'course', 'custom', 'danger', 'decade', 'defend', 'degree', 'depend', 'desert', 'device', 'detail', 'dinner', 'double', 'driver', 'editor', 'effect', 'empire', 'energy', 'engine', 'ensure', 'escape', 'ethnic', 'exceed', 'except', 'excess', 'export', 'fabric', 'factor', 'family', 'famous', 'father', 'female', 'finger', 'finish', 'flight', 'follow', 'forest', 'friend', 'format', 'future', 'garden', 'gender', 'global', 'ground', 'growth', 'guilty', 'handle', 'health', 'height', 'honest', 'impact', 'import', 'indeed', 'inside', 'invest', 'island', 'junior', 'latter', 'launch', 'lawyer', 'league', 'legacy', 'length', 'lesson', 'letter', 'liquid', 'listen', 'little', 'luxury', 'manner', 'manual', 'market', 'medium', 'matter', 'master', 'member', 'memory', 'method', 'middle', 'minute', 'mirror', 'mobile', 'modern', 'moment', 'museum', 'nation', 'nature', 'nobody', 'normal', 'number', 'object', 'office', 'online', 'option', 'orange', 'parent', 'people', 'person', 'phrase', 'planet', 'player', 'please', 'pocket', 'pretty', 'public', 'really', 'random', 'rather', 'reason', 'record', 'reduce', 'region', 'remote', 'repeat', 'return', 'review', 'reward', 'salary', 'sample', 'scheme', 'screen', 'school', 'second', 'search', 'select', 'series', 'settle', 'signal', 'silent', 'silver', 'simple', 'single', 'status', 'square', 'string', 'strong', 'submit', 'summer', 'switch', 'symbol', 'talent', 'target', 'theory', 'ticket', 'tissue', 'travel', 'unique', 'update', 'useful', 'visual', 'volume', 'wealth', 'weight', 'winner', 'winter', 'wonder', 'writer', 'yellow',
'ability', 'absence', 'account', 'address', 'airline', 'airport', 'alcohol', 'already', 'analyst', 'anxious', 'arrival', 'article', 'attract', 'average', 'balance', 'battery', 'believe', 'benefit', 'between', 'billion', 'brother', 'capital', 'captain', 'caption', 'careful', 'ceiling', 'century', 'chapter', 'charity', 'channel', 'chicken', 'classic', 'comment', 'complex', 'connect', 'concert', 'control', 'correct', 'crystal', 'culture', 'current', 'decline', 'default', 'deliver', 'destroy', 'desktop', 'diamond', 'digital', 'discuss', 'display', 'distant', 'economy', 'element', 'example', 'exhibit', 'explain',  'express', 'factory', 'fashion', 'feeling', 'fiction', 'finance', 'fitness', 'foreign', 'forever', 'fortune', 'forward', 'freedom', 'gallery', 'genetic', 'healthy', 'helpful', 'history', 'highway', 'holiday', 'illegal', 'imagine', 'initial', 'insight', 'install', 'instant', 'intense', 'journey', 'justice', 'kingdom', 'kitchen', 'liberty', 'library', 'loyalty', 'machine', 'meeting', 'million', 'mission', 'mixture', 'morning', 'mystery', 'natural', 'meither', 'nervous', 'network', 'nothing', 'nuclear', 'obvious', 'opinion', 'outlook', 'outside', 'overall', 'package', 'parking', 'passion', 'patient', 'pattern', 'picture', 'popular', 'plastic', 'premium', 'present', 'printer', 'promise', 'product', 'program', 'profile', 'privacy', 'protect', 'publish', 'quality', 'railway', 'reflect', 'receive', 'replace', 'respect', 'routine', 'science', 'serious', 'setting', 'silence', 'similar', 'society', 'special', 'station', 'stretch', 'someone', 'strange', 'student', 'subject', 'support', 'survive', 'surface', 'teacher', 'theater', 'therapy', 'totally', 'traffic', 'trouble', 'typical', 'uniform', 'upgrade', 'variety', 'vehicle', 'version', 'victory', 'village', 'virtual', 'visible', 'weather', 'website', 'wedding', 'welcome', 'weekend', 'western', 'witness',
'abstract', 'accident', 'activity', 'actually', 'alliance', 'analysis', 'anything', 'anywhere', 'argument', 'approach', 'approval', 'athletic', 'bachelor', 'baseball', 'birthday', 'building', 'business', 'calendar', 'campaign', 'capacity', 'category', 'caremony', 'champion', 'children', 'clothing', 'colorful', 'complete', 'computer', 'continue', 'contrast','creative', 'cultural', 'customer', 'database', 'daylight', 'deadline', 'decision', 'delicate', 'delivery', 'describe', 'dialogue', 'discount', 'dramatic', 'distinct', 'electric', 'employee', 'engineer', 'evaluate', 'everyday', 'everyone', 'exposure', 'exercise', 'exchange', 'explicit', 'external', 'familiar', 'feedback', 'festival', 'flexible', 'football', 'fraction', 'function', 'graphics', 'graduate', 'grateful', 'hardware', 'heritage', 'homepage', 'hospital', 'humanity', 'identity', 'industry', 'innocent', 'interest', 'keyboard', 'language', 'lifetime', 'laughter', 'location', 'magazine', 'magnetic', 'marriage', 'material', 'medicine', 'memorial', 'midnight', 'mobility', 'mountain', 'movement', 'notebook', 'official', 'occasion', 'operator', 'optimism', 'optional', 'ordinary', 'patience', 'personal', 'platform', 'pleasure', 'portrait', 'positive', 'possible', 'powerful', 'pregnant', 'presence', 'princess', 'priority', 'property', 'proposal', 'purchase', 'question', 'religion', 'research', 'resident', 'romantic', 'schedule', 'security', 'sequence', 'shoulder', 'slightly', 'software', 'solution', 'specific', 'straight', 'strategy', 'surprise', 'symbolic', 'takeover', 'terrible', 'together', 'tomorrow', 'triangle', 'tropical', 'umbrella', 'universe', 'weakness', 'wireless', 'workshop', 'yourself',
'adjective', 'abundance', 'accessory', 'adaptable', 'addiction', 'actuality', 'adulthood', 'adventure', 'ambulance', 'alligator', 'affection', 'ambitious', 'architect', 'astronaut', 'attention', 'automatic', 'beautiful', 'beginning', 'blueberry', 'breakfast', 'brilliant', 'butterfly', 'chocolate', 'character', 'confusion', 'curiosity', 'celebrity', 'chemistry', 'christmas', 'challenge', 'childhood', 'celebrate', 'community', 'countdown', 'crocodile', 'dangerous', 'different', 'difficult', 'deception', 'delicious', 'direction', 'discovery', 'divergent', 'ecosystem', 'education', 'everybody', 'equipment', 'experiment', 'fairytale', 'fantastic', 'fragrance', 'fireworks', 'foundation', 'generosity', 'happiness', 'hamburger', 'halloween', 'honeymoon', 'hurricane', 'identical', 'important', 'irregular', 'imaginary', 'integrity', 'influence', 'invisible', 'jellyfish', 'knowledge', 'legendary', 'marketing', 'masculine', 'moustache', 'necessary', 'nightmare', 'nutrition', 'pollution', 'powerless', 'president', 'pineapple', 'packaging', 'parachute', 'recycling', 'scientist', 'something', 'structure', 'secretary', 'sanctuary', 'signature', 'sleepover', 'snowflake', 'tradition', 'territory', 'touchdown', 'undefined', 'underwear', 'vegetable', 'waterfall', 'wonderful',
'appreciate', 'acceptable', 'adrenaline', 'admiration', 'atmosphere', 'attraction', 'attractive', 'basketball', 'blackboard', 'brightness', 'camouflage', 'compliment', 'conference', 'cheesecake', 'cleverness', 'conscience', 'confidence', 'conection', 'dedication', 'department', 'dicipline', 'dictionary','disturbing', 'everywhere', 'earthquake', 'effortless', 'everything', 'elementary', 'expression', 'excitement', 'excellence', 'experience', 'friendship', 'generation', 'girlfriend', 'graduation', 'gracefully', 'gymnastics', 'helicopter', 'heartbreak', 'hypothesis', 'homecoming', 'individual', 'innovation', 'instrument', 'invincible', 'laboratory', 'leadership', 'literature', 'loneliness', 'medication', 'meditation', 'microscope',  'motivation', 'motorcycle', 'narcissist', 'pedestrian', 'philosophy', 'photogenic', 'perfection', 'playground', 'perception', 'prediction', 'protection', 'production', 'prosperity', 'punishment', 'rainforest', 'reflection', 'remarkable', 'retirement', 'restaurant', 'revolution', 'revelation', 'separation', 'silhouette', 'strawberry', 'skateboard', 'statistics', 'sweetheart', 'speechless', 'technology', 'television', 'temptation', 'tenderness', 'toothbrush', 'understand', 'university', 'vocabulary', 'watermelon']

let word3Letters = wordList.filter(word => word.length === 3);
let word4Letters = wordList.filter(word => word.length === 4);
let word5Letters = wordList.filter(word => word.length === 5);
let word6Letters = wordList.filter(word => word.length === 6);
let word7Letters = wordList.filter(word => word.length === 7);
let word8Letters = wordList.filter(word => word.length === 8);
let word9Letters = wordList.filter(word => word.length === 9);
let word10Letters = wordList.filter(word => word.length === 10)

const typingGame = new Game();

const btnStartElement = document.getElementById('btnStart');
const currentWordElement = document.getElementById('currentWord');
const typeWordInput = document.getElementById('typeWord');
const messageElement = document.getElementById('message')
const timeElement= document.getElementById('timeCounter');
const scoreElement = document.getElementById('scoreCounter');
const highScoreElement = document.getElementById('highscoreSave');
const btnStartOverElement = document.getElementById('btnStartOver');

const typeWordValue = typeWordInput.value;

const highScore = localStorage.setItem('highscore', 0)


function printTime() {
    timeElement.innerText = typingGame.time
}

function startGame() {
    printTime()
    typingGame.start(printTime);
    typingGame.round++;
}

function selectWord(words) {
    const randomSelection = Math.floor(Math.random()* (words.length));
    currentWord = words[randomSelection];
    words.splice(randomSelection, 1);
    currentWordElement.innerText = currentWord
}

// function wordByLetter() {
//     const letters = currentWord.split('')
//     for (let i=0; i < letters.length; i++ ) {
//         let letterElement = letters[i]
//         newLetterSpan = `
//         <span class="letter" >${letterElement}</span>`
//         currentWordElement.insertAdjacentHTML('beforeend', newLetterSpan);
//     }
// }

function addTime() {
    if (typingGame.score % 5 === 0) {
        typingGame.time += 5;
    };
    printTime()
}

function checkRound() {
    let i = 3;
    if (typingGame.round <= i) {
        selectWord(word3Letters)
        return
    };
    if (typingGame.round <= i*2) {
        selectWord(word4Letters)
        return
    };
    if (typingGame.round <= i*3) {
        selectWord(word5Letters)
        return
    };
    if (typingGame.round <= i*4) {
        selectWord(word6Letters)
        return
    };
    if (typingGame.round <= i*5) {
        selectWord(word7Letters)
        return
    };
    if (typingGame.round <= i*6) {
        selectWord(word8Letters)
        return
    };
    if (typingGame.round <= i*7) {
        selectWord(word9Letters)
        return
    };
    if (typingGame.round > i*7) {
        selectWord(word10Letters)
        return
    }; 
}

function matchWord() {
    if (currentWordElement.innerText === typeWordInput.value) { 
        typingGame.score++;
        messageElement.innerText = ''
        return true
    } else {
            messageElement.innerText = 'WRONG'
            return false
        }
}

// function matchLetter() {
//     if (currentWordElement.innerText === typeWordInput.value) { 
//         typingGame.score++;
//         messageElement.innerText = ''
//         return true
//     } else {
//             messageElement.innerText = 'WRONG'
//             return false
//         }
// }

function nextWord() {
    matchWord();
    typeWordInput.value = '';
    scoreElement.innerText = typingGame.score;
    typingGame.round++;
    checkEndGame();
    addTime()
    // setHighScore()
}

function resetGame() {
    typingGame.restart();
    typeWordInput.value = 'type away...';
    currentWordElement.innerText = '';
    scoreElement.innerText = typingGame.score;
    timeElement.innerText = typingGame.time;
    highScoreElement.innerText = localStorage.getItem('highscore')
}


function checkEndGame() {
    if (!typingGame.gamePlaying && typingGame.time === 0) {
        typeWordInput.removeEventListener('keypress', (e) => {if (e.key === 'Enter') {
            nextWord();
        }})
    }
    setHighScore()
}

function setHighScore() { 
    if (typingGame.score > localStorage.getItem('highscore')) {
        localStorage.setItem('highscore', typingGame.score)
    }
    
}

btnStartElement.addEventListener('click', () => {
    startGame();
    checkRound()
})

typeWordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    
        if (typingGame.gamePlaying && typingGame.time > 0) {
            nextWord();
            checkRound();
        }
    }
})

btnStartOverElement.addEventListener('click', () => { 
    // window.location.reload();
    resetGame()
})
