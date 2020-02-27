let i = 13,
  line = i,
  a = '',
  b = '*';
  i = 0;

do {
    console.log(Array(1 + i).join(a) + Array(line - i).join(b) + Array(1 + i).join(a));
}
while (++i < line);