import React, { Component } from "react";

export default class Logo extends Component {
  render() {
const { color } = this.props;

    return (
      <svg
        width="190"
        height="150"
        viewBox="0 0 190 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.20606 148.676V131.989H7.22784L16.138 144.624L14.7873 144.319L23.6756 131.989H23.7192V148.676H20.5603V139.112L20.7564 140.746L15.3319 148.458H15.2883L9.71135 140.746L10.256 139.243V148.676H7.20606Z"
          fill={color}
        />
        <path
          d="M26.8833 140.681C26.8833 139.577 27.0939 138.531 27.5151 137.544C27.9363 136.556 28.5172 135.685 29.2579 134.93C30.0131 134.16 30.8845 133.557 31.8721 133.121C32.8597 132.686 33.9199 132.468 35.0527 132.468C36.171 132.468 37.224 132.686 38.2116 133.121C39.1992 133.557 40.0706 134.16 40.8258 134.93C41.5955 135.685 42.191 136.556 42.6122 137.544C43.0479 138.531 43.2657 139.577 43.2657 140.681C43.2657 141.814 43.0479 142.874 42.6122 143.861C42.191 144.849 41.5955 145.72 40.8258 146.476C40.0706 147.216 39.1992 147.797 38.2116 148.218C37.224 148.64 36.171 148.85 35.0527 148.85C33.9199 148.85 32.8597 148.64 31.8721 148.218C30.8845 147.797 30.0131 147.216 29.2579 146.476C28.5172 145.72 27.9363 144.849 27.5151 143.861C27.0939 142.874 26.8833 141.814 26.8833 140.681ZM30.1511 140.681C30.1511 141.392 30.2745 142.061 30.5214 142.685C30.7828 143.295 31.1387 143.84 31.5889 144.319C32.0536 144.784 32.5837 145.147 33.1792 145.408C33.7892 145.67 34.45 145.8 35.1617 145.8C35.8443 145.8 36.476 145.67 37.057 145.408C37.6524 145.147 38.168 144.784 38.6037 144.319C39.0394 143.84 39.3807 143.295 39.6276 142.685C39.8745 142.061 39.998 141.392 39.998 140.681C39.998 139.955 39.8672 139.279 39.6058 138.655C39.3589 138.03 39.0104 137.486 38.5601 137.021C38.1244 136.542 37.6089 136.171 37.0134 135.91C36.4179 135.648 35.7716 135.518 35.0745 135.518C34.3774 135.518 33.7311 135.648 33.1356 135.91C32.5402 136.171 32.0173 136.542 31.5671 137.021C31.1169 137.486 30.7683 138.03 30.5214 138.655C30.2745 139.279 30.1511 139.955 30.1511 140.681Z"
          fill={color}
        />
        <path
          d="M47.7482 132.642L52.432 144.188L50.602 143.818L54.8501 132.642H58.5972L51.2774 149.417L43.9576 132.642H47.7482Z"
          fill={color}
        />
        <path
          d="M61.371 132.642H64.5299V148.676H61.371V132.642Z"
          fill={color}
        />
        <path
          d="M83.0246 149.33L70.8685 138.35L71.8053 138.873L71.8706 148.676H68.6682V132.01H68.7989L80.6936 142.946L79.9965 142.641L79.9311 132.642H83.1117V149.33H83.0246Z"
          fill={color}
        />
        <path
          d="M100.247 147.064C100.058 147.267 99.7601 147.478 99.3534 147.696C98.9467 147.899 98.4747 148.088 97.9374 148.262C97.4145 148.436 96.8772 148.574 96.3253 148.676C95.7734 148.792 95.2505 148.85 94.7567 148.85C93.4496 148.85 92.2732 148.661 91.2275 148.284C90.1819 147.892 89.2887 147.354 88.548 146.672C87.8073 145.975 87.2409 145.154 86.8487 144.21C86.4566 143.266 86.2605 142.235 86.2605 141.117C86.2605 139.65 86.4784 138.379 86.9141 137.304C87.3643 136.215 87.967 135.314 88.7223 134.603C89.492 133.877 90.3707 133.339 91.3583 132.991C92.3604 132.642 93.4061 132.468 94.4953 132.468C95.5265 132.468 96.4705 132.584 97.3274 132.816C98.1843 133.034 98.9104 133.31 99.5059 133.644L98.482 136.585C98.2206 136.44 97.872 136.295 97.4363 136.15C97.0006 136.004 96.5576 135.888 96.1074 135.801C95.6572 135.699 95.2578 135.648 94.9092 135.648C94.0378 135.648 93.2681 135.757 92.6 135.975C91.9319 136.193 91.3655 136.52 90.9008 136.956C90.4505 137.391 90.1093 137.936 89.8769 138.589C89.6445 139.228 89.5283 139.976 89.5283 140.833C89.5283 141.589 89.659 142.271 89.9204 142.881C90.1819 143.477 90.545 143.985 91.0097 144.406C91.489 144.827 92.0481 145.147 92.6872 145.365C93.3407 145.582 94.0596 145.691 94.8439 145.691C95.2941 145.691 95.708 145.662 96.0856 145.604C96.4632 145.532 96.7828 145.423 97.0442 145.277V143.339H94.2775V140.289H100.247V147.064Z"
          fill={color}
        />
        <path
          d="M110.919 132.642H121.856V135.692H114.078V139.112H120.962V142.162H114.078V145.626H122.161V148.676H110.919V132.642Z"
          fill={color}
        />
        <path
          d="M133.99 136.52C133.38 136.186 132.756 135.91 132.117 135.692C131.492 135.474 130.904 135.365 130.352 135.365C129.67 135.365 129.132 135.503 128.74 135.779C128.348 136.055 128.152 136.469 128.152 137.021C128.152 137.399 128.297 137.74 128.588 138.045C128.893 138.335 129.277 138.597 129.742 138.829C130.221 139.061 130.715 139.272 131.224 139.461C131.688 139.635 132.146 139.846 132.596 140.093C133.061 140.325 133.475 140.623 133.838 140.986C134.201 141.334 134.491 141.777 134.709 142.315C134.927 142.838 135.036 143.484 135.036 144.254C135.036 145.067 134.825 145.822 134.404 146.519C133.983 147.216 133.366 147.783 132.552 148.218C131.739 148.64 130.737 148.85 129.546 148.85C128.936 148.85 128.312 148.792 127.673 148.676C127.048 148.545 126.431 148.356 125.821 148.11C125.211 147.848 124.623 147.521 124.056 147.129L125.45 144.667C125.828 144.943 126.235 145.19 126.67 145.408C127.121 145.612 127.571 145.771 128.021 145.887C128.471 146.004 128.885 146.062 129.263 146.062C129.64 146.062 130.018 146.011 130.396 145.909C130.788 145.793 131.107 145.604 131.354 145.343C131.616 145.081 131.746 144.718 131.746 144.254C131.746 143.934 131.637 143.644 131.42 143.382C131.216 143.121 130.933 142.881 130.57 142.663C130.221 142.445 129.837 142.257 129.415 142.097C128.922 141.908 128.413 141.69 127.89 141.443C127.368 141.196 126.874 140.899 126.409 140.55C125.959 140.187 125.588 139.744 125.298 139.221C125.022 138.684 124.884 138.03 124.884 137.261C124.884 136.331 125.087 135.525 125.494 134.842C125.915 134.16 126.503 133.622 127.259 133.23C128.014 132.824 128.885 132.599 129.873 132.555C131.165 132.555 132.211 132.707 133.01 133.012C133.823 133.317 134.549 133.681 135.188 134.102L133.99 136.52Z"
          fill={color}
        />
        <path
          d="M137.04 132.642H147.846V135.692H143.946V148.676H140.787V135.692H137.04V132.642Z"
          fill={color}
        />
        <path
          d="M147.788 148.676L155.021 132.01H155.195L162.428 148.676H158.768L154.15 136.956L156.437 135.387L150.904 148.676H147.788ZM152.734 142.881H157.548L158.659 145.539H151.753L152.734 142.881Z"
          fill={color}
        />
        <path
          d="M162.378 132.642H173.184V135.692H169.284V148.676H166.125V135.692H162.378V132.642Z"
          fill={color}
        />
        <path
          d="M176.232 132.642H187.168V135.692H179.391V139.112H186.275V142.162H179.391V145.626H187.473V148.676H176.232V132.642Z"
          fill={color}
        />
        <path
          d="M66.2159 0L0 48.2895V122.097H29.9851V106.017L16.0271 105.965V56.0926L66.2159 19.8217L116.404 56.0926V105.965L95.0001 106.017V122.097H132.431V48.2895L66.2159 0Z"
          fill={color}
        />
        <path
          d="M123.784 0L57.5689 48.2895V122.097H95.0001V106.017L73.5959 105.965V56.0926L123.784 19.8217L173.973 56.0926V105.965L160.355 106.017V122.097H190V48.2895L123.784 0Z"
          fill={color}
        />
        <path
          d="M93.1215 61.0488H81.9096V72.2606H93.1215V61.0488Z"
          fill={color}
        />
        <path
          d="M107.567 61.0488H96.355V72.2606H107.567V61.0488Z"
          fill={color}
        />
        <path
          d="M93.1215 75.216H81.9096V86.4278H93.1215V75.216Z"
          fill={color}
        />
        <path
          d="M107.567 75.216H96.355V86.4278H107.567V75.216Z"
          fill={color}
        />
        <path
          d="M160.359 122.097H144.332V56.3431L160.359 68.0023V122.097Z"
          fill={color}
        />
        <path
          d="M29.9851 122.097L45.9124 122.097V56.3431L29.8854 68.0023L29.9851 122.097Z"
          fill={color}
        />
      </svg>
    );
  }
}


