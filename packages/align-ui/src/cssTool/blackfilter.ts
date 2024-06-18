const blackConfig: { ios: string[]; android: string[]; web: string[] } = {
  ios: ['overlay', 'alignVertical'],
  android: [
    'flex-none',
    'content-evenly',
    'border-double',
    'border-none',
    'z-auto',
    'fixed',
    'sticky',
    'direction',
    'writing',
    'shadow',
    'text-decorate',
  ],
  web: [],
};

const blackfilter = function (key: string, OS: string): string {
  let sky: string = '';
  const bArr: string[] = blackConfig[OS as keyof typeof blackConfig] || [];
  const realArr: string[] = bArr.filter((item: string) => key.indexOf(item) === 0);
  if (realArr?.length === 0) {
    sky = key;
  }
  return sky;
};

export default blackfilter;
