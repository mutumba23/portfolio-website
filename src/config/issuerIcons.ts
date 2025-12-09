import { faBuilding, faAward, faGlobe, faGraduationCap, faShield, faCheck, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons';

export const PROVIDER_ICON_MAP: Record<string, any> = {
    'Microsoft': faMicrosoft,
    'Microsoft/LinkedIn Learning': faMicrosoft, // Keep generic Microsoft for combined providers if needed
    'Google': faGoogle,
    'Coursera': faGlobe, // Fallback if Coursera is used as a Provider key
    'Edureka': faLaptopCode,
    'Pluralsight': faLaptopCode,
    'Pluralsight Courses': faLaptopCode, // Handle potential variations
    'Luleå University': faGraduationCap,
    'Infosys': faBuilding,
    'LEX Certificates': faShield,
    'DEFAULT': faCheck
};
