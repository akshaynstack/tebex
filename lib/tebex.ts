import axios from 'axios';
import { TebexPackage } from '@/types/tebex';

const api = axios.create({
  baseURL: 'https://plugin.tebex.io',
  headers: {
    'X-Tebex-Secret': process.env.TEBEX_SECRET_KEY!,
  },
});

export const getAllPackages = async (): Promise<TebexPackage[]> => {
  const res = await api.get<{ packages: TebexPackage[] }>('/packages');
  return res.data.packages;
};

export const getPackageDetails = async (id: number): Promise<TebexPackage> => {
  const res = await api.get<{ package: TebexPackage }>(`/package/${id}`);
  return res.data.package;
};