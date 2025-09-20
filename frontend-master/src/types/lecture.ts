export interface Lecture {
    id: number;
    title: string;
    duration: string;
    size: string;
    type: 'Recorded' | 'Live';
    date: string;
    version: string;
    status: 'completed' | 'pending';
}
