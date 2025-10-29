export type ThreatType='Phishing'|'Malware'|'Spam';
export type ThreatStatus='Quarantined'|'Blocked';
export interface ThreatDetails{subject:string;sender:string;}
export interface Threat{id:string;timestamp:string;type:ThreatType;status:ThreatStatus;risk_score:number;details:ThreatDetails;}
export interface ThreatSummary{emails_scanned:number;threats_detected:number;quarantined_items:number;}
export interface ThreatFeed{summary:ThreatSummary;threats:Threat[];}