export const getAuthHeader = (token: string | null) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
