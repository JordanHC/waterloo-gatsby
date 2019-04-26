import React from "react";
import styled from "styled-components";
import Contact from "./Contact";

const FooterSection = styled.footer`
  background: ${props => props.theme.darkColor};
  padding-top: 75px;
  @media (min-width: 768px) {
    padding-top: 80px;
  }
  @media (min-width: 992px) {
    transform: translateY(-80px);
    margin-bottom: -80px;
    padding-top: 240px;
  }
  @media (min-width: 1380px) {
    transform: translateY(-100px);
    margin-bottom: -100px;
    padding-top: 300px;
  }
`;

const FooterText = styled.div`
  opacity: 0.3;
  text-align: center;
  padding-bottom: 25px;
  @media (min-width: 992px) {
    padding-bottom: 30px;
  }
  @media (min-width: 1380px) {
    padding-bottom: 36px;
  }
`;

const SvgWrapper = styled.span`
  padding-left: 5px;
  transform: translateY(2px);
`;

const FooterSpan = styled.span`
  display: inline-block;
  font-size: 10px;
  line-height: 14px;
  color: ${props => props.theme.white};
  padding-left: 8px;
  @media (min-width: 992px) {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.5px;
  }

  @media (min-width: 1380px) {
    padding-left: 14px;
    font-size: 12px;
    line-height: 18px;
  }

  &:first-child {
    padding-left: 0;
    padding-right: 8px;
    border-right: 1px solid rgba(216, 216, 216);
    @media (min-width: 1380px) {
      padding-right: 14px;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.white};

    ${props =>
      props.containsSvg
        ? `
      display: flex;
      align-items: center;
    `
        : ``}
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <FooterSection>
        <Contact />
        <FooterText>
          <FooterSpan>
            &copy; {new Date().getFullYear()} - Jordan Hale-Clowes
          </FooterSpan>
          <FooterSpan containsSvg>
            <a
              href="https://github.com/JordanHC/waterloo-gatsby"
              target="_blank"
              rel="noopener noreferrer"
            >
              Want to Contribute?
              <SvgWrapper>
                <svg
                  width="10px"
                  height="13px"
                  viewBox="0 0 10 13"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="#ffffff"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Desktop-HD-Copy-2"
                      transform="translate(-1121.000000, -3381.000000)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Footer"
                        transform="translate(787.000000, 3378.000000)"
                      >
                        <g
                          id="Contribute"
                          transform="translate(208.000000, 3.000000)"
                        >
                          <path
                            d="M126.863281,6.87890625 C126.792968,6.87890625 126.728516,6.85742209 126.669922,6.81445312 C126.611328,6.77148416 126.574219,6.71875031 126.558594,6.65625 C126.472656,6.38281113 126.40625,6.07031426 126.359375,5.71875 C126.3125,5.36718574 126.298828,5.01172055 126.318359,4.65234375 C126.337891,4.29296695 126.392578,3.9511735 126.482422,3.62695312 C126.572266,3.30273275 126.710937,3.03125109 126.898438,2.8125 C126.820312,2.49999844 126.800781,2.15820498 126.839844,1.78710938 C126.878906,1.41601377 126.976562,1.11718863 127.132812,0.890625 C127.164063,0.843749766 127.203125,0.808593867 127.25,0.78515625 C127.296875,0.761718633 127.351562,0.75 127.414062,0.75 C127.843752,0.765625078 128.20703,0.849608613 128.503906,1.00195312 C128.800783,1.15429764 129.074218,1.31249918 129.324219,1.4765625 C129.675783,1.38281203 130.027342,1.32031266 130.378906,1.2890625 C130.730471,1.25781234 131.109373,1.25390613 131.515625,1.27734375 C131.617188,1.27734375 131.714843,1.28710928 131.808594,1.30664062 C131.902344,1.32617197 131.992187,1.34765613 132.078125,1.37109375 C132.164063,1.38671883 132.246093,1.40234367 132.324219,1.41796875 C132.402344,1.43359383 132.464844,1.44140625 132.511719,1.44140625 C132.558594,1.43359371 132.617187,1.40820334 132.6875,1.36523438 C132.757813,1.32226541 132.824218,1.27734398 132.886719,1.23046875 L133.074219,1.11328125 C133.136719,1.07421855 133.203125,1.03906266 133.273438,1.0078125 C133.460938,0.92187457 133.64453,0.859375195 133.824219,0.8203125 C134.003907,0.781249805 134.20703,0.757812539 134.433594,0.75 C134.519532,0.75 134.595703,0.779296582 134.662109,0.837890625 C134.728516,0.896484668 134.765625,0.96874957 134.773438,1.0546875 C134.773438,1.14843797 134.744141,1.22656219 134.685547,1.2890625 C134.626953,1.35156281 134.550782,1.38671871 134.457031,1.39453125 C134.26953,1.39453125 134.105469,1.41015609 133.964844,1.44140625 C133.824218,1.47265641 133.679688,1.52343715 133.53125,1.59375 C133.492187,1.60937508 133.449219,1.63281234 133.402344,1.6640625 C133.355469,1.69531266 133.304688,1.72656234 133.25,1.7578125 C133.148437,1.82812535 133.041016,1.89453094 132.927734,1.95703125 C132.814453,2.01953156 132.695313,2.05859367 132.570312,2.07421875 C132.468749,2.08203129 132.365235,2.07617197 132.259766,2.05664062 C132.154296,2.03710928 132.046876,2.01562512 131.9375,1.9921875 L131.703125,1.9453125 C131.625,1.92968742 131.550782,1.91796879 131.480469,1.91015625 C131.082029,1.88671863 130.712892,1.89257795 130.373047,1.92773438 C130.033201,1.9628908 129.691408,2.03124949 129.347656,2.1328125 C129.308594,2.14062504 129.265625,2.14062504 129.21875,2.1328125 C129.171875,2.12499996 129.128906,2.10937512 129.089844,2.0859375 L129.007812,2.02734375 C128.789061,1.88671805 128.570314,1.75585998 128.351562,1.63476562 C128.132811,1.51367127 127.875001,1.43750016 127.578125,1.40625 C127.507812,1.59375094 127.46875,1.82226428 127.460938,2.09179688 C127.453125,2.36132947 127.484375,2.58984281 127.554688,2.77734375 C127.585938,2.83984406 127.591797,2.90429654 127.572266,2.97070312 C127.552734,3.03710971 127.519531,3.09374977 127.472656,3.140625 C127.324218,3.26562563 127.208985,3.45702996 127.126953,3.71484375 C127.044921,3.97265754 126.992188,4.25976404 126.96875,4.57617188 C126.945312,4.89257971 126.951172,5.21679521 126.986328,5.54882812 C127.021485,5.88086104 127.082031,6.18359238 127.167969,6.45703125 C127.191406,6.53515664 127.183594,6.61523396 127.144531,6.69726562 C127.105469,6.77929729 127.042969,6.83203113 126.957031,6.85546875 C126.941406,6.86328129 126.925781,6.86914061 126.910156,6.87304688 C126.894531,6.87695314 126.878906,6.87890625 126.863281,6.87890625 Z M129.300781,10.0429688 C129.285156,10.0429688 129.271484,10.0410156 129.259766,10.0371094 C129.248047,10.0332031 129.238281,10.03125 129.230469,10.03125 C129.144531,10.0156249 129.076172,9.9707035 129.025391,9.89648438 C128.974609,9.82226525 128.960937,9.73828172 128.984375,9.64453125 L129.007812,9.5625 C129.054688,9.33593637 129.101562,9.1328134 129.148438,8.953125 C129.195313,8.7734366 129.246093,8.61718816 129.300781,8.484375 C128.644528,8.35156184 128.082034,8.13281402 127.613281,7.828125 C127.144529,7.52343598 126.796876,7.14843973 126.570312,6.703125 C126.53125,6.62499961 126.52539,6.54296918 126.552734,6.45703125 C126.580078,6.37109332 126.632812,6.30859395 126.710938,6.26953125 C126.789063,6.23046855 126.871093,6.22460924 126.957031,6.25195312 C127.042969,6.27929701 127.105469,6.33203086 127.144531,6.41015625 C127.347657,6.80859574 127.683591,7.13867057 128.152344,7.40039062 C128.621096,7.66211068 129.191403,7.83984328 129.863281,7.93359375 C129.925782,7.94140629 129.982422,7.96679666 130.033203,8.00976562 C130.083985,8.05273459 130.117187,8.10546844 130.132812,8.16796875 C130.148438,8.23046906 130.144531,8.29296844 130.121094,8.35546875 C130.097656,8.41796906 130.0625,8.4687498 130.015625,8.5078125 C129.976562,8.53906266 129.925782,8.63671793 129.863281,8.80078125 C129.800781,8.96484457 129.722657,9.2617166 129.628906,9.69140625 L129.605469,9.78515625 C129.589844,9.86328164 129.552735,9.92578102 129.494141,9.97265625 C129.435547,10.0195315 129.371094,10.0429688 129.300781,10.0429688 Z M128.703125,12.3867188 C128.695312,12.3867188 128.685547,12.3847656 128.673828,12.3808594 C128.662109,12.3769531 128.652344,12.375 128.644531,12.375 C128.558593,12.3593749 128.490235,12.3164066 128.439453,12.2460938 C128.388672,12.1757809 128.371094,12.0976567 128.386719,12.0117188 C128.417969,11.8632805 128.476562,11.7519535 128.5625,11.6777344 C128.648438,11.6035153 128.722656,11.5468752 128.785156,11.5078125 C128.824219,11.4843749 128.851562,11.4667969 128.867188,11.4550781 C128.882813,11.4433593 128.894531,11.4296876 128.902344,11.4140625 C128.941406,11.3359371 128.960938,11.2109384 128.960938,11.0390625 C128.960938,10.8671866 128.957031,10.6992196 128.949219,10.5351562 C128.941406,10.4648434 128.935547,10.3964847 128.931641,10.3300781 C128.927734,10.2636715 128.925781,10.1953129 128.925781,10.125 C128.558592,10.1875003 128.191408,10.2031252 127.824219,10.171875 C127.457029,10.1406248 127.16797,9.9453143 126.957031,9.5859375 C126.910156,9.51562465 126.873047,9.44531285 126.845703,9.375 C126.818359,9.30468715 126.792969,9.23828156 126.769531,9.17578125 C126.738281,9.1054684 126.708985,9.03906281 126.681641,8.9765625 C126.654297,8.91406219 126.621094,8.85937523 126.582031,8.8125 C126.527343,8.74218715 126.503906,8.66406293 126.511719,8.578125 C126.519531,8.49218707 126.558593,8.42187527 126.628906,8.3671875 C126.699219,8.30468719 126.777343,8.27929682 126.863281,8.29101562 C126.949219,8.30273443 127.019531,8.33984344 127.074219,8.40234375 C127.152344,8.49609422 127.210937,8.58984328 127.25,8.68359375 C127.289063,8.77734422 127.328125,8.86718707 127.367188,8.953125 C127.382813,9.00781277 127.402344,9.06054662 127.425781,9.11132812 C127.449219,9.16210963 127.472656,9.21093727 127.496094,9.2578125 C127.613282,9.44531344 127.804686,9.54296871 128.070312,9.55078125 C128.335939,9.55859379 128.710935,9.51562547 129.195312,9.421875 C129.242188,9.41406246 129.291015,9.41601557 129.341797,9.42773438 C129.392578,9.43945318 129.4375,9.46484355 129.476562,9.50390625 C129.515625,9.53515641 129.542969,9.57421852 129.558594,9.62109375 C129.574219,9.66796898 129.578125,9.71874973 129.570312,9.7734375 C129.5625,9.87500051 129.560547,9.98828062 129.564453,10.1132812 C129.568359,10.2382819 129.574219,10.3671868 129.582031,10.5 C129.589844,10.7265636 129.591797,10.9414052 129.587891,11.1445312 C129.583984,11.3476573 129.546875,11.527343 129.476562,11.6835938 C129.429687,11.7929693 129.369141,11.8749997 129.294922,11.9296875 C129.220703,11.9843753 129.15625,12.0273436 129.101562,12.0585938 C129.085937,12.0664063 129.068359,12.0761718 129.048828,12.0878906 C129.029297,12.0996094 129.015625,12.109375 129.007812,12.1171875 C129,12.1953129 128.966797,12.2597654 128.908203,12.3105469 C128.849609,12.3613284 128.78125,12.3867188 128.703125,12.3867188 Z M133.367188,12.328125 C133.3125,12.328125 133.261719,12.3144533 133.214844,12.2871094 C133.167969,12.2597655 133.128906,12.2226565 133.097656,12.1757812 L133.044922,12.1230469 C133.025391,12.1035155 133,12.0859376 132.96875,12.0703125 C132.914062,12.0312498 132.855469,11.9843753 132.792969,11.9296875 C132.730468,11.8749997 132.671875,11.7968755 132.617188,11.6953125 C132.523437,11.5078116 132.474609,11.2832044 132.470703,11.0214844 C132.466797,10.7597643 132.472656,10.4882827 132.488281,10.2070312 C132.496094,10.0273429 132.501953,9.85156336 132.505859,9.6796875 C132.509766,9.50781164 132.503906,9.34765699 132.488281,9.19921875 C132.472656,9.08203066 132.445313,8.9882816 132.40625,8.91796875 C132.367187,8.8476559 132.316407,8.7773441 132.253906,8.70703125 C132.214844,8.66015602 132.175781,8.60742217 132.136719,8.54882812 C132.097656,8.49023408 132.058594,8.4257816 132.019531,8.35546875 C132.003906,8.30078098 131.996094,8.24804713 131.996094,8.19726562 C131.996094,8.14648412 132.011719,8.09765648 132.042969,8.05078125 C132.066406,8.00390602 132.099609,7.96679701 132.142578,7.93945312 C132.185547,7.91210924 132.234375,7.8984375 132.289062,7.8984375 C132.890628,7.85156227 133.41992,7.69336072 133.876953,7.42382812 C134.333987,7.15429553 134.67578,6.79297102 134.902344,6.33984375 C134.941406,6.26171836 135.001953,6.20898451 135.083984,6.18164062 C135.166016,6.15429674 135.25,6.16015605 135.335938,6.19921875 C135.414063,6.23828145 135.466797,6.30078082 135.494141,6.38671875 C135.521485,6.47265668 135.515625,6.55468711 135.476562,6.6328125 C135.226561,7.11718992 134.878908,7.51562344 134.433594,7.828125 C133.988279,8.14062656 133.468753,8.35546816 132.875,8.47265625 C132.929688,8.55078164 132.980469,8.64062449 133.027344,8.7421875 C133.074219,8.84375051 133.105469,8.96874926 133.121094,9.1171875 C133.144531,9.28906336 133.154297,9.47070217 133.150391,9.66210938 C133.146484,9.85351658 133.140625,10.046874 133.132812,10.2421875 C133.117187,10.4609386 133.109375,10.6816395 133.109375,10.9042969 C133.109375,11.1269542 133.136718,11.2929682 133.191406,11.4023438 C133.207031,11.4257814 133.224609,11.4472655 133.244141,11.4667969 C133.263672,11.4863282 133.292969,11.5117186 133.332031,11.5429688 C133.378906,11.5664064 133.429687,11.6015623 133.484375,11.6484375 C133.539063,11.6953127 133.589844,11.7539059 133.636719,11.8242188 C133.683594,11.9023441 133.697266,11.9843746 133.677734,12.0703125 C133.658203,12.1562504 133.613282,12.222656 133.542969,12.2695312 C133.511719,12.2851563 133.482422,12.2988281 133.455078,12.3105469 C133.427734,12.3222657 133.398438,12.328125 133.367188,12.328125 Z M135.183594,6.80859375 C135.167969,6.80859375 135.154297,6.80664064 135.142578,6.80273438 C135.130859,6.79882811 135.117188,6.796875 135.101562,6.796875 C135.015625,6.77343738 134.951172,6.72265664 134.908203,6.64453125 C134.865234,6.56640586 134.855469,6.48437543 134.878906,6.3984375 C134.964844,6.08593594 135.017578,5.75976732 135.037109,5.41992188 C135.056641,5.08007643 135.042969,4.75390781 134.996094,4.44140625 C134.949219,4.12890469 134.873047,3.84570439 134.767578,3.59179688 C134.662109,3.33788936 134.531251,3.14453191 134.375,3.01171875 C134.320312,2.96484352 134.285156,2.91015656 134.269531,2.84765625 C134.253906,2.78515594 134.257812,2.72265656 134.28125,2.66015625 C134.351563,2.4492177 134.369141,2.2011733 134.333984,1.91601562 C134.298828,1.63085795 134.238282,1.39062598 134.152344,1.1953125 C134.121094,1.11718711 134.121094,1.03710979 134.152344,0.955078125 C134.183594,0.873046465 134.238281,0.812500195 134.316406,0.7734375 C134.402344,0.742187344 134.486328,0.742187344 134.568359,0.7734375 C134.650391,0.804687656 134.707031,0.859374609 134.738281,0.9375 C134.839844,1.16406363 134.914062,1.4374984 134.960938,1.7578125 C135.007813,2.0781266 135,2.38281105 134.9375,2.671875 C135.132813,2.88281355 135.287109,3.14648279 135.400391,3.46289062 C135.513672,3.77929846 135.591797,4.1152326 135.634766,4.47070312 C135.677735,4.82617365 135.6875,5.18749816 135.664062,5.5546875 C135.640625,5.92187684 135.585938,6.26171719 135.5,6.57421875 C135.476562,6.6445316 135.435547,6.70117166 135.376953,6.74414062 C135.318359,6.78710959 135.253907,6.80859375 135.183594,6.80859375 Z M132.3125,12.75 C132.28125,12.75 132.25,12.7460938 132.21875,12.7382812 C132.1875,12.7304687 132.160156,12.7187501 132.136719,12.703125 C132.105469,12.6874999 132.044922,12.6367192 131.955078,12.5507812 C131.865234,12.4648433 131.738282,12.2968763 131.574219,12.046875 C131.503906,11.9296869 131.441407,11.5878935 131.386719,11.0214844 C131.332031,10.4550753 131.289063,9.66406758 131.257812,8.6484375 C131.25,8.55468703 131.277343,8.47656281 131.339844,8.4140625 C131.402344,8.35156219 131.476562,8.31640629 131.5625,8.30859375 C131.648438,8.30859375 131.724609,8.33984344 131.791016,8.40234375 C131.857422,8.46484406 131.890625,8.53906207 131.890625,8.625 C131.90625,8.95312664 131.921875,9.28710768 131.9375,9.62695312 C131.953125,9.96679857 131.970703,10.2812486 131.990234,10.5703125 C132.009766,10.8593764 132.03125,11.1074208 132.054688,11.3144531 C132.078125,11.5214854 132.101562,11.6562497 132.125,11.71875 C132.242188,11.9062509 132.330078,12.0273435 132.388672,12.0820312 L132.476562,12.1640625 C132.554688,12.2109377 132.603516,12.2773433 132.623047,12.3632812 C132.642578,12.4492192 132.625,12.5312496 132.570312,12.609375 C132.546875,12.6562502 132.509766,12.6914061 132.458984,12.7148438 C132.408203,12.7382814 132.359375,12.75 132.3125,12.75 Z M129.875,12.75 C129.820312,12.75 129.769531,12.7382814 129.722656,12.7148438 C129.675781,12.6914061 129.636719,12.6562502 129.605469,12.609375 C129.558594,12.5312496 129.544922,12.4492192 129.564453,12.3632812 C129.583984,12.2773433 129.628906,12.2109377 129.699219,12.1640625 C129.707031,12.1640625 129.738281,12.136719 129.792969,12.0820312 C129.847657,12.0273435 129.937499,11.9062509 130.0625,11.71875 C130.085938,11.6562497 130.107422,11.5214854 130.126953,11.3144531 C130.146484,11.1074208 130.167969,10.8593764 130.191406,10.5703125 C130.214844,10.2812486 130.234375,9.96679857 130.25,9.62695312 C130.265625,9.28710768 130.277344,8.95312664 130.285156,8.625 C130.292969,8.53906207 130.328125,8.46484406 130.390625,8.40234375 C130.453125,8.33984344 130.53125,8.30859375 130.625,8.30859375 C130.710938,8.31640629 130.783203,8.35156219 130.841797,8.4140625 C130.900391,8.47656281 130.929688,8.55468703 130.929688,8.6484375 C130.898437,9.66406758 130.855469,10.4550753 130.800781,11.0214844 C130.746093,11.5878935 130.683594,11.9296869 130.613281,12.046875 C130.449218,12.2968763 130.322266,12.4648433 130.232422,12.5507812 C130.142578,12.6367192 130.082031,12.6874999 130.050781,12.703125 C130.027344,12.7187501 130,12.7304687 129.96875,12.7382812 C129.9375,12.7460938 129.90625,12.75 129.875,12.75 Z"
                            id="github"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </SvgWrapper>
            </a>
          </FooterSpan>
        </FooterText>
      </FooterSection>
    );
  }
};

export default Footer;
