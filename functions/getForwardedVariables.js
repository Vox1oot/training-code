const getForwardedVariables = (config) => {
  const environments = config
    .split('\n')
    .filter((string) => string.startsWith('environment='))
    .filter((string) => string.includes('X_FORWARDED_'))
    .map((string) => string.replace('environment=', ''))
    .flatMap((string) => string.split(','))
    .map((string) => string.replace('"', ''))
    .filter((string) => string.startsWith('X_FORWARDED_'))
    .map((string) => string.replace('X_FORWARDED_', ''))
    .map((string) => string.replace('"', ''));

  const result = environments.join(',');
  return result;
};

const config = `[foo:bar]
environment="X_FORWARDED_var1=111"

[bar:baz]
environment="key2=true,X_FORWARDED_var2=123"
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'

[baz:foo]
key3="value3"
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'

[program:prepare]
environment="key5=value5,X_FORWARDED_var3=value,key6=value6"

[program:start]
environment="pwd=/temp,user=tirion"

[program:options]
environment="X_FORWARDED_mail=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make environment'

[empty]
command="X_FORWARDED_HOME=/ cd ~"`;

getForwardedVariables(config);