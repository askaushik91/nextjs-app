import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const VegetableIcons: Record<string, React.FC<IconProps>> = {
  zucchini: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 48C20 48 38 42 46 26C52 14 48 10 44 14C32 26 18 42 14 46C12 48 12 48 14 48Z" fill="#EAB308" />
      <path d="M46 26C52 14 48 10 44 14C32 26 18 42 14 46" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 14C43 11 45 7 48 9" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 41C28 37 38 31 43 21" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  ),
  tomato: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="35" r="21" fill="#EF4444" />
      <circle cx="25" cy="27" r="4" fill="#FCA5A5" opacity="0.6" />
      <path d="M32 14V8" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 14C29 16 22 13 22 13M32 14C35 16 42 13 42 13M32 14C30 18 34 22 34 22M32 14C34 18 30 22 30 22" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bhindi: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28 10C29 13 32 13 32 10V6C32 6 28 6 28 10Z" fill="#15803D" />
      <path d="M22 13C25 13 35 13 38 13C38 13 36 25 34 38C32 50 27 58 26 60C25 58 24 50 24 38C24 25 22 13 22 13Z" fill="#22C55E" />
      <path d="M27 13V55" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M33 13C32 25 31 38 29 48" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 19C25 28 26 38 26 48" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ghiya: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 10C32 10 27 16 27 22C27 28 24 30 22 35C19 41 20 52 28 56C36 60 44 56 46 48C48 40 43 36 41 32C39 28 37 22 37 10H32Z" fill="#4ADE80" />
      <path d="M34 10V6C34 6 36 4 38 5" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 15C29 22 31 29 27 38C24 45 25 51 31 55" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  chappan_kaddu: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="32" cy="35" rx="20" ry="16" fill="#86EFAC" />
      <path d="M32 19V14C32 14 34 12 36 13" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 19C26 21 20 25 20 35C20 45 26 49 32 51" stroke="#22C55E" strokeWidth="2" />
      <path d="M32 19C38 21 44 25 44 35C44 45 38 49 32 51" stroke="#22C55E" strokeWidth="2" />
      <path d="M32 19C32 23 32 47 32 51" stroke="#22C55E" strokeWidth="2" />
    </svg>
  ),
  kheera: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 42C16 52 24 54 28 50C36 42 48 24 52 16C54 12 50 8 46 10C38 14 20 30 12 42Z" fill="#15803D" />
      <path d="M46 10C38 14 20 30 12 42" stroke="#166534" strokeWidth="1.5" />
      <path d="M22 38C26 34 36 26 42 18" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      <path d="M16 46C20 42 28 34 34 26" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      <path d="M49 9C49 9 52 6 54 7" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  lobia: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28 10C24 20 22 36 28 54C29 57 32 58 31 54C28 38 29 22 32 10" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 10C38 20 40 36 34 54C33 57 30 58 31 54C35 38 34 22 30 10" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 8C28 10 34 10 36 8" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26.5" cy="22" r="1.5" fill="#166534" />
      <circle cx="26" cy="34" r="1.5" fill="#166534" />
      <circle cx="28" cy="45" r="1.5" fill="#166534" />
      <circle cx="34.5" cy="20" r="1.5" fill="#14532D" />
      <circle cx="36" cy="32" r="1.5" fill="#14532D" />
      <circle cx="34" cy="44" r="1.5" fill="#14532D" />
    </svg>
  ),
  kakkri: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 50C15 54 22 52 28 46C38 36 50 18 53 13C55 10 51 7 48 9C40 13 24 32 16 42C10 48 8 46 10 50Z" fill="#86EFAC" />
      <path d="M48 9C40 13 24 32 16 42" stroke="#4ADE80" strokeWidth="1.5" />
      <path d="M24 36C30 30 38 20 44 14" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      <path d="M16 44C20 40 28 30 34 22" stroke="#22C55E" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  ),
  pyaaz: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 12C28 20 18 24 18 36C18 46 24 52 32 52C40 52 46 46 46 36C46 24 36 20 32 12Z" fill="#C084FC" />
      <path d="M32 12C30 18 24 22 24 36C24 46 28 50 32 50C36 50 40 46 40 36C40 22 34 18 32 12Z" fill="#A855F7" />
      <path d="M32 12C32 20 28 24 28 36C28 44 30 48 32 48C34 48 36 44 36 36C36 24 32 20 32 12Z" fill="#8B5CF6" />
      <path d="M30 52L28 57M32 52L32 58M34 52L36 57" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 12V4C30 4 28 2 28 2M32 12C33 10 36 6 36 6M32 12C31 10 26 8 26 8" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  tinda: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="36" r="18" fill="#86EFAC" />
      <circle cx="28" cy="30" r="3" fill="#FFFFFF" opacity="0.4" />
      <path d="M32 18C32 18 30 14 30 11C30 8 33 6 35 7" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M32 18C28 22 24 28 24 36C24 44 28 50 32 54" stroke="#4ADE80" strokeWidth="1.5" />
    </svg>
  ),
  torri: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 48C18 52 24 52 28 48C36 40 46 22 49 14C51 10 47 7 44 9L16 48Z" fill="#15803D" />
      <path d="M44 9C38 15 24 31 18 43" stroke="#14532D" strokeWidth="1.5" />
      <path d="M46 11C40 18 27 34 20 46" stroke="#166534" strokeWidth="1.5" />
      <path d="M42 7C35 13 22 28 16 40" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M47 7C47 7 49 4 51 5" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  krela: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 46C18 52 25 50 29 46C37 38 46 22 49 14C51 10 47 7 44 9L12 46Z" fill="#166534" />
      <circle cx="20" cy="42" r="1.5" fill="#22C55E" />
      <circle cx="24" cy="38" r="1.5" fill="#22C55E" />
      <circle cx="28" cy="34" r="1.5" fill="#22C55E" />
      <circle cx="32" cy="30" r="1.5" fill="#22C55E" />
      <circle cx="36" cy="26" r="1.5" fill="#22C55E" />
      <circle cx="40" cy="22" r="1.5" fill="#22C55E" />
      <circle cx="44" cy="18" r="1.5" fill="#22C55E" />
      <circle cx="16" cy="45" r="1.5" fill="#22C55E" />
      <circle cx="22" cy="45" r="1.5" fill="#22C55E" />
      <circle cx="29" cy="41" r="1.5" fill="#22C55E" />
      <circle cx="35" cy="35" r="1.5" fill="#22C55E" />
      <circle cx="41" cy="29" r="1.5" fill="#22C55E" />
      <circle cx="44" cy="23" r="1.5" fill="#22C55E" />
      <path d="M47 8C47 8 50 4 52 5" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  petha: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="32" cy="36" rx="21" ry="17" fill="#15803D" />
      <ellipse cx="32" cy="36" rx="16" ry="17" fill="#166534" />
      <ellipse cx="32" cy="36" rx="9" ry="17" fill="#14532D" />
      <circle cx="20" cy="30" r="1" fill="#86EFAC" opacity="0.6" />
      <circle cx="24" cy="42" r="1" fill="#86EFAC" opacity="0.6" />
      <circle cx="40" cy="28" r="1" fill="#86EFAC" opacity="0.6" />
      <circle cx="44" cy="38" r="1" fill="#86EFAC" opacity="0.6" />
      <path d="M32 19V13C32 13 35 10 38 12" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  ),
  lassan: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 14C28 22 20 26 20 36C20 44 25 48 32 48C39 48 44 44 44 36C44 26 36 22 32 14Z" fill="#F3F4F6" />
      <path d="M32 14C30 22 26 26 26 36C26 44 29 47 32 47C35 47 38 44 38 36C38 26 34 22 32 14Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="0.5" />
      <path d="M32 14V48" stroke="#D1D5DB" strokeWidth="1" />
      <path d="M20 36C22 36 27 40 32 48" stroke="#D1D5DB" strokeWidth="1" />
      <path d="M44 36C42 36 37 40 32 48" stroke="#D1D5DB" strokeWidth="1" />
      <path d="M30 48L28 53M32 48L32 54M34 48L36 53" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 14V10" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  arbi: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 30C20 20 28 16 32 16C36 16 44 20 44 30C44 40 38 48 32 48C26 48 20 40 20 30Z" fill="#78350F" />
      <path d="M22 28C26 27 38 27 42 28" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 34C25 33 39 33 43 34" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
      <path d="M23 40C27 39 37 39 41 40" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 22C28 21 36 21 38 22" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 16L32 12" stroke="#451A03" strokeWidth="2" />
    </svg>
  ),
  malabar_spinach: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 54V16" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 24C24 24 16 18 16 10C16 10 24 10 32 16" fill="#22C55E" stroke="#C084FC" strokeWidth="1.5" />
      <path d="M32 36C40 36 48 30 48 22C48 22 40 22 32 28" fill="#15803D" stroke="#C084FC" strokeWidth="1.5" />
      <path d="M32 44C22 44 14 38 14 30C14 30 24 30 32 36" fill="#22C55E" stroke="#C084FC" strokeWidth="1.5" />
      <path d="M32 20C40 20 46 14 46 6C46 6 38 6 32 12" fill="#16A34A" stroke="#C084FC" strokeWidth="1.5" />
    </svg>
  ),
  mooli: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 22C35 22 38 26 38 34C38 46 33 56 32 60C31 56 26 46 26 34C26 26 29 22 32 22Z" fill="#F9FAFB" />
      <path d="M32 22C30 26 29 32 29 38C29 44 30 50 32 56" stroke="#E5E7EB" strokeWidth="1.5" />
      <path d="M32 22V8C30 6 26 4 26 4" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 22C34 18 38 12 38 12" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 22C30 18 24 14 24 14" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 22C35 20 40 18 40 18" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  shalgam: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 20C21 20 18 26 18 36C18 46 24 50 32 50C40 50 46 46 46 36C46 26 43 20 32 20Z" fill="#F9FAFB" />
      <path d="M32 20C21 20 18 26 18 36C18 38 46 38 46 36C46 26 43 20 32 20Z" fill="#A855F7" />
      <path d="M32 50L32 56" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20V8C29 6 27 6 27 6" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M32 20C35 15 39 10 39 10" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M32 20C29 16 23 13 23 13" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  chukandar: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 20C20 20 16 26 16 36C16 46 24 51 32 51C40 51 48 46 48 36C48 26 44 20 32 20Z" fill="#881337" />
      <path d="M32 51L32 58" stroke="#881337" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20C32 20 26 12 24 8" stroke="#BE123C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 8C20 8 18 12 18 12" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20C32 20 36 12 38 8" stroke="#BE123C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 8C42 8 44 12 44 12" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20V6" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 6C30 3 34 2 34 2" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  gaajar: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 20C35 20 38 23 38 28C38 38 34 52 32 58C30 52 26 38 26 28C26 23 29 20 32 20Z" fill="#F97316" />
      <path d="M28 28C30 29 34 29 36 28" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 36C29 37 33 37 35 36" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M29 44C30 45 33 45 34 44" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 20V8C30 6 28 6 28 6" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 20C34 16 38 10 38 10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 20C30 16 26 12 26 12" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  paalak: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 52V20" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M32 24C22 24 16 16 16 16C16 16 24 16 32 22" fill="#22C55E" stroke="#16A34A" strokeWidth="1" />
      <path d="M32 34C42 34 48 26 48 26C48 26 40 26 32 32" fill="#15803D" stroke="#16A34A" strokeWidth="1" />
      <path d="M32 44C20 44 14 36 14 36C14 36 22 36 32 42" fill="#22C55E" stroke="#16A34A" strokeWidth="1" />
      <path d="M32 18C24 14 22 6 22 6C22 6 30 8 32 16" fill="#166534" stroke="#16A34A" strokeWidth="1" />
    </svg>
  ),
  methe: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 52V24" stroke="#22C55E" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="5" fill="#4ADE80" />
      <circle cx="40" cy="28" r="5" fill="#16A34A" />
      <circle cx="22" cy="36" r="4.5" fill="#22C55E" />
      <circle cx="42" cy="38" r="4.5" fill="#4ADE80" />
      <circle cx="32" cy="18" r="5.5" fill="#15803D" />
    </svg>
  ),
  methi: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 50V26" stroke="#4ADE80" strokeWidth="2" />
      <ellipse cx="25" cy="25" rx="5" ry="4" fill="#22C55E" />
      <ellipse cx="39" cy="28" rx="5" ry="4" fill="#15803D" />
      <ellipse cx="26" cy="36" rx="4" ry="3" fill="#4ADE80" />
      <ellipse cx="38" cy="38" rx="4" ry="3" fill="#22C55E" />
      <circle cx="32" cy="18" r="5" fill="#22C55E" />
    </svg>
  ),
  dhaniya: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 52V20" stroke="#16A34A" strokeWidth="2" />
      <path d="M32 24C24 22 18 16 18 16" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 16C15 17 14 20 14 20" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 32C40 30 46 24 46 24" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M46 24C49 25 50 28 50 28" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 40C26 38 20 34 20 34" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 16C28 12 28 6 28 6" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  saron: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 54V24" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 20C20 20 12 12 12 12C12 12 24 12 32 18" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
      <path d="M32 34C44 34 50 24 50 24C50 24 40 24 32 30" fill="#15803D" stroke="#14532D" strokeWidth="1.5" />
      <path d="M32 46C20 46 14 38 14 38C14 38 24 38 32 42" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
      <circle cx="16" cy="14" r="2" fill="#4ADE80" />
      <circle cx="46" cy="26" r="2" fill="#22C55E" />
    </svg>
  ),
  phull_gobi: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 36C14 24 24 14 32 14" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M50 36C50 24 40 14 32 14" stroke="#15803D" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M32 52C22 52 14 42 14 36" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M32 52C42 52 50 42 50 36" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="34" r="13" fill="#F3F4F6" />
      <circle cx="27" cy="29" r="6" fill="#F9FAFB" />
      <circle cx="37" cy="29" r="6" fill="#F9FAFB" />
      <circle cx="32" cy="39" r="6" fill="#E5E7EB" />
      <circle cx="26" cy="37" r="5" fill="#E5E7EB" />
      <circle cx="38" cy="37" r="5" fill="#E5E7EB" />
    </svg>
  ),
  band_gobi: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="35" r="18" fill="#86EFAC" />
      <path d="M18 26C24 28 32 22 32 35" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M46 26C40 28 32 22 32 35" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M18 42C24 40 32 44 32 35" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M46 42C40 40 32 44 32 35" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M32 17C32 22 30 26 32 35" stroke="#15803D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  broccoli: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 52V36" stroke="#15803D" strokeWidth="8" strokeLinecap="round" />
      <path d="M26 44L20 38" stroke="#15803D" strokeWidth="5" strokeLinecap="round" />
      <path d="M38 44L44 38" stroke="#166534" strokeWidth="5" strokeLinecap="round" />
      <circle cx="32" cy="24" r="12" fill="#166534" />
      <circle cx="22" cy="26" r="9" fill="#15803D" />
      <circle cx="42" cy="26" r="9" fill="#14532D" />
      <circle cx="32" cy="16" r="8" fill="#22C55E" />
    </svg>
  ),
  lettuce: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="35" r="16" fill="#4ADE80" />
      <path d="M16 35C14 30 18 24 24 22C30 20 34 16 32 16" stroke="#22C55E" strokeWidth="2" fill="none" />
      <path d="M48 35C50 30 46 24 40 22C34 20 30 16 32 16" stroke="#16A34A" strokeWidth="2" fill="none" />
      <path d="M16 35C14 40 18 46 24 48C30 50 34 54 32 54" stroke="#22C55E" strokeWidth="2" fill="none" />
      <path d="M48 35C50 40 46 46 40 48C34 50 30 54 32 54" stroke="#16A34A" strokeWidth="2" fill="none" />
    </svg>
  ),
  hrra_pyaaz: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28 50C28 46 30 44 32 44C34 44 36 46 36 50C36 54 34 56 32 56C30 56 28 54 28 50Z" fill="#F9FAFB" />
      <path d="M30 56L28 60M32 56L32 61M34 56L36 60" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 44V26" stroke="#4ADE80" strokeWidth="4" />
      <path d="M30 44V30" stroke="#F9FAFB" strokeWidth="1.5" />
      <path d="M32 26V8C32 8 26 4 24 4" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 26C32 26 38 18 40 12" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 26V10" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  hrra_lassan: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M30 46C30 44 31 42 32 42C33 42 34 44 34 46C34 48 33 50 32 50C31 50 30 48 30 46Z" fill="#F3F4F6" />
      <path d="M31 50L29 54M32 50L32 55M33 50L35 54" stroke="#D1D5DB" strokeWidth="1" strokeLinecap="round" />
      <path d="M32 42V28" stroke="#22C55E" strokeWidth="3" />
      <path d="M31 42V32" stroke="#F3F4F6" strokeWidth="1" />
      <path d="M32 28C32 28 26 16 26 10" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 28C32 28 38 18 38 12" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  baingan: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 16C24 24 20 30 20 40C20 50 25 54 32 54C39 54 44 50 44 40C44 30 40 24 32 16Z" fill="#581C87" />
      <path d="M24 36C28 28 32 26 32 16" stroke="#7E22CE" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="28" cy="30" r="3" fill="#A855F7" opacity="0.4" />
      <path d="M32 16C29 18 24 16 24 16M32 16C35 18 40 16 40 16M32 16V10M32 16C33 21 37 21 37 21M32 16C31 21 27 21 27 21" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mattar: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 32C20 42 44 42 54 32C44 22 20 22 10 32Z" fill="#15803D" />
      <path d="M10 32C20 44 44 44 54 32" stroke="#166534" strokeWidth="2.5" fill="none" />
      <path d="M10 32C20 20 44 20 54 32" stroke="#166534" strokeWidth="2.5" fill="none" />
      <circle cx="18" cy="32" r="4.5" fill="#4ADE80" />
      <circle cx="27" cy="32" r="4.5" fill="#22C55E" />
      <circle cx="36" cy="32" r="4.5" fill="#4ADE80" />
      <circle cx="45" cy="32" r="4.5" fill="#22C55E" />
    </svg>
  ),
  rocket_leaves: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 54V14" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 18C26 20 24 24 24 24M32 28C22 30 20 34 20 34M32 38C22 40 18 44 18 44" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 18C38 20 40 24 40 24M32 28C42 30 44 34 44 34M32 38C42 40 46 44 46 44" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 14C30 11 32 8 32 8" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  potato: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 32C16 22 24 16 32 16C40 16 48 22 48 32C48 42 40 48 32 48C24 48 16 42 16 32Z" fill="#B45309" />
      <circle cx="24" cy="28" r="1.5" fill="#78350F" opacity="0.6" />
      <circle cx="36" cy="24" r="1.5" fill="#78350F" opacity="0.6" />
      <circle cx="40" cy="38" r="1.5" fill="#78350F" opacity="0.6" />
      <circle cx="28" cy="40" r="1.5" fill="#78350F" opacity="0.6" />
    </svg>
  ),
  red_spinach: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 52V20" stroke="#BE123C" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M32 24C24 24 16 16 16 16C16 16 24 16 32 22" fill="#22C55E" stroke="#BE123C" strokeWidth="1" />
      <path d="M32 34C40 34 48 26 48 26C48 26 40 26 32 32" fill="#BE123C" stroke="#BE123C" strokeWidth="1" />
      <path d="M32 44C22 44 14 36 14 36C14 36 24 36 32 42" fill="#22C55E" stroke="#BE123C" strokeWidth="1" />
      <path d="M32 18C24 14 22 6 22 6C22 6 30 8 32 16" fill="#881337" stroke="#BE123C" strokeWidth="1" />
    </svg>
  ),
  black_eyed_peas: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28 10C24 20 22 36 28 54C29 57 32 58 31 54C28 38 29 22 32 10" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 10C38 20 40 36 34 54C33 57 30 58 31 54C35 38 34 22 30 10" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 8C28 10 34 10 36 8" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26.5" cy="22" r="1.5" fill="#000000" />
      <circle cx="26" cy="34" r="1.5" fill="#000000" />
      <circle cx="28" cy="45" r="1.5" fill="#000000" />
      <circle cx="34.5" cy="20" r="1.5" fill="#000000" />
      <circle cx="36" cy="32" r="1.5" fill="#000000" />
      <circle cx="34" cy="44" r="1.5" fill="#000000" />
    </svg>
  ),
  water_spinach: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M32 54V16" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 20C20 20 14 10 14 10C14 10 24 12 32 16" fill="#4ADE80" stroke="#16A34A" strokeWidth="1" />
      <path d="M32 32C44 32 50 22 50 22C50 22 40 24 32 28" fill="#15803D" stroke="#16A34A" strokeWidth="1" />
      <path d="M32 42C20 42 14 32 14 32C14 32 24 34 32 38" fill="#22C55E" stroke="#16A34A" strokeWidth="1" />
    </svg>
  ),
  radish_pods: ({ size = '100%', ...props }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25 15C25 15 28 35 24 50C23 54 26 55 27 50C30 35 27 15 27 15" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
      <path d="M35 12C35 12 38 32 34 47C33 51 36 52 37 47C40 32 37 12 37 12" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
    </svg>
  )
};
