import { pageMeta } from '@/lib/seo';
import InsightsView from './InsightsView';

export const metadata = pageMeta({ title: 'Golf Insights: Drills & Swing Tips', description: 'Golf swing instruction, practice drills, short game, and course management tips from Melbourne, FL coach Frederique Bruell.', path: '/insights' });

export default function Insights() {
  return <InsightsView />;
}
