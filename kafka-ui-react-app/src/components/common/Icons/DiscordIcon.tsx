import React from 'react';
import styled from 'styled-components';

const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="22"
    height="18"
    className={className}
    viewBox="0 0 22 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.6239 1.60293C17.2217 0.92338 15.7181 0.422718 14.1459 0.135969C14.1173 0.130434 14.0887 0.144265 14.0739 0.171926C13.8805 0.535202 13.6663 1.00913 13.5163 1.38163C11.8254 1.11425 10.1431 1.11425 8.48679 1.38163C8.33676 1.00085 8.11478 0.535202 7.92053 0.171926C7.90578 0.145187 7.87718 0.131357 7.84855 0.135969C6.27725 0.421802 4.7736 0.922464 3.37052 1.60293C3.35838 1.60846 3.34797 1.61769 3.34106 1.62967C0.488942 6.13013 -0.292371 10.52 0.0909151 14.8554C0.0926494 14.8766 0.103922 14.8969 0.119532 14.9098C2.00127 16.3693 3.82406 17.2554 5.61301 17.8428C5.64164 17.852 5.67197 17.8409 5.69019 17.816C6.11337 17.2057 6.49059 16.5621 6.81402 15.8853C6.83311 15.8456 6.81489 15.7986 6.77588 15.7829C6.17754 15.5432 5.6078 15.2509 5.05975 14.919C5.0164 14.8923 5.01293 14.8268 5.05281 14.7954C5.16814 14.7041 5.2835 14.6092 5.39363 14.5133C5.41355 14.4958 5.44131 14.4921 5.46474 14.5031C9.06518 16.2394 12.9631 16.2394 16.521 14.5031C16.5445 14.4912 16.5722 14.4949 16.593 14.5124C16.7032 14.6083 16.8185 14.7041 16.9347 14.7954C16.9746 14.8268 16.972 14.8923 16.9286 14.919C16.3806 15.2574 15.8108 15.5432 15.2116 15.782C15.1726 15.7977 15.1553 15.8456 15.1744 15.8853C15.5047 16.5611 15.882 17.2047 16.2973 17.8151C16.3147 17.8409 16.3459 17.852 16.3745 17.8428C18.1721 17.2554 19.9949 16.3693 21.8766 14.9098C21.8931 14.8969 21.9035 14.8775 21.9053 14.8563C22.364 9.84408 21.1369 5.49024 18.6525 1.63058C18.6465 1.61769 18.6361 1.60846 18.6239 1.60293ZM7.35169 12.2156C6.26771 12.2156 5.37454 11.1645 5.37454 9.8736C5.37454 8.58274 6.25039 7.53164 7.35169 7.53164C8.46163 7.53164 9.34616 8.59197 9.32881 9.8736C9.32881 11.1645 8.45296 12.2156 7.35169 12.2156ZM14.6619 12.2156C13.5779 12.2156 12.6847 11.1645 12.6847 9.8736C12.6847 8.58274 13.5606 7.53164 14.6619 7.53164C15.7718 7.53164 16.6563 8.59197 16.639 9.8736C16.639 11.1645 15.7718 12.2156 14.6619 12.2156Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export default styled(DiscordIcon)``;
