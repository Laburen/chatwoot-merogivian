export const useInstallationName = (str, installationName) => {
  if (str && installationName) {
    return str.replace(/Merogivian/g, installationName);
  }
  return str;
};

export default {
  methods: {
    useInstallationName,
  },
};
