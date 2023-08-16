export default function wordLengths(sentence) {
    const words = sentence.split('');
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
    return sum;
  }
  