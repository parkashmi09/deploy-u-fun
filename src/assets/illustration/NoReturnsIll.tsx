import React from "react"

const NoReturnsIll: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`no-returns_ill ${className}`}
      viewBox='0 0 240 240'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M76.8407 83.0132C65.8595 81.9884 47.7167 63.6836 47.7167 63.6836C45.9839 72.1616 32.2031 80.6276 32.2031 80.6276C32.2031 80.6276 35.6375 83.5076 43.1399 85.8968C50.6423 88.286 60.1655 85.0928 60.1655 85.0928C57.0695 87.422 58.2839 88.7024 58.3775 89.5772C58.4711 90.452 57.3383 90.1064 56.2067 92.4128C55.0751 94.7192 58.2575 94.3328 56.1179 96.0608C53.9783 97.7888 55.3775 99.6704 55.3775 99.6704L54.6263 105.628C64.7771 98.3084 77.7275 94.7564 77.7275 94.7564C80.9891 92.6048 76.8407 83.0132 76.8407 83.0132ZM59.3591 84.914C58.4423 84.3308 57.5507 83.7032 56.6783 83.0552C55.3583 82.0748 54.0383 81.0416 52.9259 79.8152C52.4459 79.2824 52.0655 78.656 51.4259 78.2936C50.8726 77.9918 50.2268 77.9062 49.6139 78.0536C47.8139 78.4448 46.1951 79.9916 45.0827 81.4064C44.9555 81.5672 44.7059 81.4892 44.6111 81.3452C44.2158 80.7402 43.7352 80.1954 43.1843 79.7276C42.7955 79.4024 42.2879 79.0508 41.7563 79.0676C41.2763 79.082 40.8371 79.472 40.3943 79.6424C38.6999 80.2928 36.7127 80.408 34.9103 80.4104C34.5239 80.4104 34.5239 79.8104 34.9103 79.8104C36.8723 79.8104 39.1367 79.7096 40.8791 78.7376C42.4307 77.8712 43.9883 79.436 44.8907 80.6972C45.3868 80.1161 45.932 79.5789 46.5203 79.0916C47.4803 78.2888 48.6275 77.5316 49.9055 77.402C50.498 77.337 51.0966 77.4467 51.6275 77.7176C52.3115 78.0704 52.7231 78.6692 53.2151 79.2344C55.0019 81.2888 57.3755 82.934 59.6615 84.3944C59.9867 84.602 59.6855 85.1228 59.3591 84.914ZM75.6695 84.9452C74.1791 85.1648 72.7787 85.946 71.4959 86.696C68.4635 88.4672 65.6603 90.6428 62.9435 92.8592C61.4843 94.0508 60.0395 95.2592 58.6427 96.5288C58.3559 96.7868 57.9311 96.3632 58.2179 96.104C58.7495 95.624 59.2895 95.1548 59.8319 94.688C62.2871 92.5748 64.8107 90.53 67.4447 88.6424C68.8626 87.6044 70.3417 86.6526 71.8739 85.7924C73.0007 85.1744 74.2247 84.5564 75.5111 84.3668C75.8891 84.3104 76.0511 84.8888 75.6695 84.9452Z'
        fill='#1B1B1B'
      />
      <path
        d='M53.5451 104.991L46.7603 99.7336L36.0431 91.4296L33.9203 89.7856L42.5195 86.1616L43.8299 85.6096C44.1803 85.462 44.0267 84.8812 43.6703 85.0312L34.5671 88.8712L33.7763 89.2048C34.3187 86.644 33.4727 83.6956 32.4563 81.3736C32.3027 81.0208 31.7855 81.3256 31.9379 81.676C32.9267 83.9464 33.8147 87.112 33.0407 89.6332C33.0274 89.6809 33.0262 89.7313 33.037 89.7796C33.0479 89.828 33.0706 89.8729 33.1031 89.9104C33.133 89.9618 33.1809 90.0003 33.2375 90.0184L38.1851 93.8416C38.129 93.8032 38.0621 93.7837 37.9942 93.7859C37.9262 93.788 37.8607 93.8117 37.8071 93.8536C35.5871 95.572 33.1583 98.6716 34.0343 101.645C34.3463 102.705 35.0507 103.598 35.8811 104.306C36.4811 104.813 37.2011 105.305 38.0111 105.342C39.3551 105.404 40.2251 104.169 40.8911 103.182C41.6399 102.08 42.5927 100.198 44.2079 100.521C44.5847 100.596 44.7467 100.018 44.3675 99.9424C41.4875 99.3664 40.8719 103.236 38.9675 104.471C37.4927 105.431 35.6975 103.572 35.0075 102.417C33.9623 100.654 34.5527 98.6704 35.6195 97.0756C36.3315 96.0122 37.208 95.0688 38.2163 94.2808C38.2481 94.2596 38.2743 94.2312 38.2929 94.1979C38.3115 94.1646 38.3218 94.1273 38.3231 94.0892C38.3244 94.051 38.3166 94.0132 38.3003 93.9787C38.284 93.9442 38.2598 93.914 38.2295 93.8908L39.8951 95.182L50.6123 103.486L53.1071 105.419C53.4227 105.65 53.8511 105.227 53.5451 104.991Z'
        fill='#1A1A1A'
      />
      <path
        d='M136.099 90.7848C136.112 90.2116 135.658 89.7365 135.085 89.7235C134.512 89.7105 134.037 90.1645 134.024 90.7377C134.011 91.3108 134.465 91.7859 135.038 91.7989C135.611 91.8119 136.086 91.3579 136.099 90.7848Z'
        fill='#1B1B1B'
      />
      <path
        d='M146.474 92.0582C146.487 91.4851 146.033 91.0099 145.46 90.9969C144.887 90.9839 144.412 91.438 144.399 92.0111C144.386 92.5842 144.84 93.0594 145.413 93.0724C145.986 93.0854 146.461 92.6313 146.474 92.0582Z'
        fill='#1B1B1B'
      />
      <path
        d='M139.775 95.4561L140.742 95.4993C141.022 95.5125 141.438 95.6097 141.709 95.5425C142.168 95.4297 142.078 94.9425 141.829 94.6497C141.683 94.4733 141.469 94.4217 141.301 94.2897C140.596 93.7461 141.031 92.9601 140.905 92.2245C140.838 91.8309 141.442 91.6773 141.505 92.0721C141.548 92.3429 141.553 92.6184 141.52 92.8905C141.475 93.3309 141.455 93.5949 141.831 93.8829C142.233 94.1913 142.541 94.4421 142.623 94.9797C142.877 96.6489 140.739 96.1245 139.753 96.0801C139.354 96.0621 139.366 95.4393 139.768 95.4573L139.775 95.4561Z'
        fill='#1B1B1B'
      />
      <path
        d='M98.3672 106.659L120.927 108.678L123.734 93.0088C122.28 92.872 120.889 92.1112 120.235 91.1056C119.581 90.1 118.33 87.7264 120.812 86.3764C123.294 85.0264 124.746 87.5068 124.746 87.5068C129.906 87.466 137.906 79.312 139.442 78.2524C140.978 77.1928 143.649 76.5232 145.508 79.6396C147.367 82.756 149.197 84.7252 150 86.0452C150 86.0452 149.335 92.44 148.129 95.0704C146.923 97.7008 145.226 101.258 142.192 104.054C139.159 106.85 135.782 106.348 135.782 106.348L135.656 109.992L149.686 111.248L149.794 106.467L151.93 111.447L150.361 111.311L162.332 112.383C162.332 112.383 163.276 107.505 160.191 105.663C157.106 103.821 160.657 98.9008 157.592 96.2248C154.527 93.5488 154.148 91.8748 153.337 86.332C152.526 80.7892 151.436 78.2272 149.463 75.7828C149.463 75.7828 147.783 73.5952 140.425 71.9692C133.066 70.3432 126.944 73.6492 125.44 75.592C123.937 77.5348 123.254 80.0224 120.426 80.6884C117.597 81.3544 111.458 80.902 109.354 86.3776C107.251 91.8532 109.954 92.1244 107.898 95.4124C105.841 98.7004 99.0164 100.943 98.3672 106.659Z'
        fill='#1B1B1B'
      />
      <path
        d='M125.749 97.5607C126.528 99.4901 127.603 101.286 128.936 102.884C130.357 104.607 132.185 106.099 134.305 106.759C134.35 106.772 134.397 106.775 134.444 106.768C134.49 106.76 134.535 106.741 134.573 106.714C134.611 106.686 134.642 106.65 134.664 106.608C134.686 106.567 134.698 106.52 134.699 106.473C134.701 106.406 134.68 106.34 134.64 106.286C134.6 106.232 134.544 106.192 134.48 106.173C132.094 105.442 130.149 103.569 128.709 101.578C128.043 100.656 127.451 99.6826 126.939 98.6671C126.779 98.3539 126.627 98.0371 126.484 97.7155C126.464 97.6687 126.375 97.4587 126.346 97.3939V97.4083C126.208 97.0399 125.601 97.1875 125.749 97.5607Z'
        fill='#1B1B1B'
      />
      <path
        d='M123.465 90.249C123.225 89.2074 122.476 87.369 121.202 88.4238C120.895 88.6794 120.463 88.2306 120.771 87.9738C121.611 87.2766 122.548 87.2838 123.228 88.179C123.637 88.7542 123.923 89.4079 124.068 90.099C124.158 90.4902 123.553 90.6426 123.468 90.2514L123.465 90.249Z'
        fill='#1B1B1B'
      />
      <path
        d='M137.231 143.837C138.411 164.577 134.632 179.812 131.374 188.757H130.958L116.212 188.613C108.424 188.783 101.63 182.84 98.6607 177.085C95.3175 170.605 86.6775 150.565 84.9975 141.445C83.3175 132.325 87.1575 126.325 87.1575 126.325C92.5575 128.365 93.2775 135.565 93.2775 135.565L107.678 128.125C107.678 128.125 106.053 122.903 102.462 115.201C107.446 112.587 113.438 110.305 120.116 109.429L125.438 127.526L134.71 124.576L135.76 109.521C135.76 109.521 157.6 108.681 161.08 112.041C163.895 114.759 170.482 124.706 176.135 135.841C159.564 140.023 137.231 143.837 137.231 143.837Z'
        fill='#5E59FF'
      />
      <path
        d='M107.521 127.866L94.9304 134.371L93.1208 135.306L93.572 135.565C93.2024 131.947 91.2692 127.908 87.86 126.301C86.2124 125.525 84.4148 125.033 82.7096 124.399C81.608 123.99 80.2052 123.567 79.382 122.67C78.8804 122.124 78.7916 121.209 79.5452 120.853C80.3708 120.466 81.446 120.546 82.328 120.604C84.2072 120.724 86.0888 121.101 87.9104 121.572C88.1816 121.643 88.4432 121.271 88.202 121.071C85.9316 119.183 83.6516 117.307 81.362 115.443C79.922 114.262 78.4724 113.082 77.0108 111.923C76.3544 111.403 75.5972 110.919 75.0644 110.269C74.2868 109.32 74.5088 108.294 75.4952 107.622C75.9092 107.34 76.1492 107.322 76.6268 107.475C77.1469 107.656 77.6475 107.89 78.1208 108.172C78.8328 108.572 79.5233 109.01 80.1896 109.482C80.5088 109.708 80.7896 109.192 80.492 108.964C79.8007 108.448 79.1746 107.851 78.6272 107.184C78.1004 106.534 77.1224 104.951 78.2516 104.351C79.1216 103.888 80.4944 104.638 81.2516 105.034C82.0505 105.455 82.8177 105.933 83.5472 106.465C83.8628 106.693 84.1472 106.176 83.8496 105.947C83.1162 105.412 82.4723 104.764 81.9416 104.027C81.4496 103.307 80.8376 101.655 82.0616 101.241C82.8308 100.979 83.774 101.679 84.3416 102.112C84.8003 102.458 85.2291 102.842 85.6232 103.26C85.6706 103.305 85.7313 103.333 85.7962 103.341C85.861 103.348 85.9266 103.335 85.9831 103.302C86.0395 103.269 86.0838 103.219 86.1094 103.159C86.1349 103.099 86.1403 103.032 86.1248 102.969C85.8788 102.181 85.7288 101.033 86.3552 100.384C86.8952 99.8245 87.5552 100.163 88.1552 100.453C90.4484 101.563 92.4848 103.323 94.3352 105.045C96.7964 107.335 99.0656 109.897 100.825 112.771C101.812 114.384 102.567 116.125 103.332 117.851C104.081 119.542 104.796 121.248 105.477 122.969C106.159 124.696 106.828 126.437 107.382 128.211C107.502 128.578 108.075 128.421 107.96 128.051C107.446 126.405 106.828 124.786 106.201 123.18C105.513 121.42 104.787 119.675 104.024 117.945C103.207 116.086 102.404 114.204 101.342 112.469C99.4808 109.41 97.0448 106.689 94.4036 104.281C92.5292 102.575 90.4196 100.732 88.052 99.7429C87.2252 99.3985 86.4644 99.3001 85.8284 100.073C85.1516 100.895 85.2476 102.165 85.5476 103.122L86.0492 102.831C85.1048 101.824 82.9784 99.8233 81.5024 100.853C80.4656 101.573 80.6564 103.013 81.2 103.966C81.7652 104.961 82.64 105.777 83.5484 106.462L83.8508 105.943C82.4624 104.94 80.6444 103.663 78.8684 103.633C78.0176 103.617 77.3264 104.113 77.1776 104.973C77.0084 105.948 77.6156 106.885 78.2024 107.605C78.7868 108.307 79.4536 108.936 80.1884 109.479L80.4908 108.96C79.8596 108.515 79.208 108.096 78.536 107.715C77.816 107.304 76.844 106.693 75.974 106.764C75.2072 106.827 74.3864 107.668 74.108 108.342C73.6484 109.458 74.372 110.529 75.194 111.245C76.5512 112.427 78.0296 113.494 79.4276 114.63C81.1668 116.044 82.9012 117.464 84.6308 118.891C85.6828 119.757 86.7336 120.624 87.7832 121.493L88.0748 120.991C86.4448 120.563 84.7855 120.255 83.1104 120.07C81.7904 119.929 78.7268 119.536 78.422 121.428C78.2756 122.339 78.7976 123.048 79.5104 123.553C80.6828 124.386 82.1504 124.836 83.492 125.315C85.2068 125.929 87.116 126.395 88.6316 127.431C89.7596 128.205 90.644 129.288 91.3112 130.474C92.1668 131.993 92.8052 133.877 92.9768 135.562C92.9782 135.614 92.993 135.665 93.0197 135.71C93.0465 135.755 93.0843 135.792 93.1297 135.818C93.175 135.844 93.2262 135.858 93.2784 135.858C93.3307 135.859 93.3822 135.846 93.428 135.821L106.018 129.316L107.828 128.381C108.172 128.207 107.869 127.69 107.521 127.866Z'
        fill='#1B1B1B'
      />
      <path
        d='M81.7553 110.561L88.8137 116.349L89.8253 117.178C90.1217 117.418 90.5453 116.999 90.2501 116.753L83.1917 110.965L82.1801 110.136C81.8837 109.896 81.4601 110.315 81.7553 110.561Z'
        fill='#1B1B1B'
      />
      <path
        d='M84.7847 107.457L91.6163 113.817L92.5847 114.718C92.8667 114.981 93.2927 114.557 93.0095 114.293L86.1779 107.933L85.2095 107.032C84.9275 106.769 84.5015 107.193 84.7847 107.457Z'
        fill='#1B1B1B'
      />
      <path
        d='M86.8253 103.858L94.0541 111.191L95.1053 112.258C95.3765 112.534 95.8013 112.109 95.5301 111.833L88.3013 104.5L87.2501 103.433C86.9789 103.157 86.5541 103.582 86.8253 103.858Z'
        fill='#1B1B1B'
      />
      <path
        d='M114.158 64.4647C111.936 64.6831 109.697 65.6287 107.776 66.7087C102.998 69.3943 99.5825 73.8714 97.5989 78.927C95.8145 83.4738 95.1353 88.3915 95.0177 93.2503C95.0081 93.6367 95.6081 93.6367 95.6177 93.2503C95.7965 85.8379 97.3541 77.9695 102.218 72.1303C104.768 69.0703 108.167 66.6991 111.994 65.5495C112.524 65.3882 113.063 65.2552 113.607 65.1511C113.858 65.1043 114.036 65.0755 114.153 65.0647C114.533 65.0275 114.538 64.4263 114.153 64.4647H114.158Z'
        fill='#1B1B1B'
      />
      <path
        d='M100.985 53.5128C99.1045 55.4532 97.5229 57.7572 96.1177 60.0528C93.0145 65.1228 90.8377 70.8 90.1177 76.7184C89.6193 80.869 89.8808 85.0756 90.8893 89.1324C90.9817 89.5068 91.5613 89.3484 91.4677 88.9728C89.7877 82.1676 90.3349 75.0804 92.6989 68.5068C94.3318 64.0041 96.6733 59.7911 99.6349 56.0268C100.19 55.3005 100.783 54.6036 101.411 53.9388C101.68 53.6616 101.256 53.2368 100.986 53.514L100.985 53.5128Z'
        fill='#1B1B1B'
      />
      <path
        d='M78.6867 135.481C78.1551 134.132 77.4159 132.848 76.6371 131.63C74.8959 128.907 72.7167 126.447 70.1187 124.514C66.7277 121.984 62.6468 120.546 58.4187 120.392C55.8879 120.302 52.0323 120.62 51.2907 123.639C50.7291 125.925 52.1235 128.369 53.5299 130.062C54.7455 131.526 56.8191 133.476 58.9143 133.182C60.7395 132.927 61.3407 130.638 61.1943 129.072C61.0035 126.948 59.6343 125.135 58.0659 123.783C55.5975 121.661 52.4871 120.349 49.3971 119.427C44.6403 118.017 39.6375 117.481 34.6911 117.361C33.1803 117.323 31.6683 117.327 30.1575 117.361C29.7723 117.371 29.7711 117.971 30.1575 117.961C35.3811 117.833 40.6563 118.081 45.7827 119.145C49.1931 119.853 52.6227 120.913 55.6095 122.745C57.4803 123.893 59.3499 125.448 60.2055 127.53C60.7731 128.91 60.8859 130.967 59.7579 132.128C58.4295 133.497 56.1471 131.799 55.1175 130.862C53.5035 129.393 51.9531 127.247 51.7851 125.001C51.7131 124.032 51.9651 123.081 52.6743 122.388C53.6739 121.413 55.2015 121.122 56.5407 121.022C60.5895 120.721 64.7283 121.815 68.1807 123.927C72.5007 126.567 75.9939 130.812 78.0207 135.447C78.0831 135.589 78.0555 135.521 78.1059 135.649C78.2463 136.009 78.8259 135.849 78.6843 135.489L78.6867 135.481Z'
        fill='#1B1B1B'
      />
      <path
        d='M76.7354 145.015C76.0154 143.88 74.8934 142.938 73.7942 142.194C71.0342 140.323 67.6418 139.635 64.3418 139.839C61.3742 140.023 58.4906 140.86 55.757 141.999C55.4054 142.146 55.5602 142.726 55.9166 142.578C60.0854 140.844 64.7966 139.735 69.2714 140.85C71.5778 141.423 73.7534 142.594 75.3998 144.324C75.7048 144.628 75.9789 144.961 76.2182 145.32C76.4246 145.645 76.9382 145.344 76.7366 145.017L76.7354 145.015Z'
        fill='#1B1B1B'
      />
      <path
        d='M134.408 125.365C134.408 128.005 134.433 130.645 134.477 133.285C134.555 138.101 134.667 142.925 135.012 147.729C135.15 149.661 135.279 151.635 135.707 153.53C135.792 153.907 136.37 153.747 136.285 153.371C135.915 151.736 135.789 150.042 135.66 148.376C135.479 146.039 135.369 143.696 135.283 141.351C135.121 136.965 135.043 132.577 135.019 128.189C135.013 127.249 135.008 126.309 135.009 125.37C135.009 124.983 134.409 124.983 134.409 125.37L134.408 125.365Z'
        fill='#1B1B1B'
      />
      <path
        d='M142.56 138.505C142.56 138.515 142.55 138.525 142.545 138.534C142.496 138.503 142.451 138.459 142.474 138.424C142.501 138.453 142.529 138.48 142.56 138.505Z'
        fill='#1B1B1B'
      />
      <path
        d='M146.977 110.881C146.893 111.805 146.809 112.729 146.724 113.654L145.626 125.721C145.396 128.244 145.167 130.767 144.937 133.291C144.935 133.37 144.903 133.445 144.847 133.501C144.791 133.557 144.716 133.589 144.637 133.591H139.708C140.768 135.039 141.828 136.487 142.889 137.935C143.104 138.228 143.227 138.37 143.129 138.724C142.988 139.238 142.841 139.749 142.702 140.264C142.455 141.174 142.215 142.085 141.982 142.999L141.324 143.119C141.602 142.026 141.889 140.936 142.187 139.85C142.294 139.458 142.351 138.919 142.535 138.54C142.604 138.584 142.682 138.602 142.578 138.531L142.55 138.511C142.556 138.498 142.564 138.484 142.571 138.471C142.578 138.458 142.589 138.379 142.597 138.378C142.518 138.388 142.477 138.408 142.464 138.429C142.292 138.243 142.138 137.93 142.012 137.758L138.85 133.438C138.71 133.249 138.899 132.987 139.109 132.987H144.36C144.434 132.162 144.51 131.338 144.584 130.513C144.95 126.49 145.316 122.468 145.684 118.446C145.913 115.923 146.143 113.4 146.372 110.877C146.412 110.492 147.012 110.49 146.977 110.881Z'
        fill='#1B1B1B'
      />
      <path
        d='M123.385 121.608L125.002 126.018L128.888 136.611L133.59 149.431L137.658 160.521L139.004 164.193C139.213 164.762 139.378 165.378 139.639 165.925C139.651 165.95 139.658 165.978 139.668 166.004C139.8 166.364 140.379 166.208 140.246 165.845L138.628 161.435L134.744 150.841L130.042 138.021L125.974 126.931L124.628 123.259C124.419 122.69 124.254 122.075 123.993 121.527C123.981 121.502 123.974 121.475 123.964 121.448C123.832 121.088 123.253 121.244 123.386 121.608H123.385Z'
        fill='#1B1B1B'
      />
      <path
        d='M108.708 113.736L111.588 121.758L116.178 134.531L117.225 137.446C117.243 137.509 117.281 137.564 117.333 137.604C117.385 137.644 117.449 137.666 117.514 137.667L122.314 137.067L122.025 136.688L120.849 140.072L120.136 142.121C120.057 142.348 119.926 142.568 120.025 142.8C120.192 143.193 120.588 143.582 120.836 143.925L122.707 146.518L133.826 161.934L136.815 166.078C137.04 166.389 137.559 166.089 137.334 165.776L129.601 155.051L123.948 147.213L121.825 144.27C121.444 143.742 121.09 143.168 120.67 142.671C120.652 142.649 120.58 142.511 120.55 142.509C120.55 142.509 120.466 142.773 120.596 142.614C120.726 142.456 120.77 142.113 120.836 141.92L121.233 140.776L122.6 136.844C122.659 136.676 122.499 136.44 122.311 136.464L117.511 137.064L117.8 137.285L114.92 129.263L110.334 116.49L109.286 113.576C109.156 113.216 108.577 113.37 108.708 113.735V113.736Z'
        fill='#1B1B1B'
      />
      <path
        d='M108.738 126.749C109.396 128.04 110.041 129.337 110.684 130.635C112.272 133.835 113.832 137.051 115.364 140.284C117.301 144.371 119.195 148.48 121.004 152.623C122.76 156.635 124.456 160.68 125.938 164.801C126.95 167.617 128.08 170.611 128.338 173.617C128.358 173.857 128.37 174.088 128.371 174.323C128.371 174.709 128.971 174.709 128.971 174.323C128.971 173.158 128.724 171.991 128.452 170.865C128.064 169.259 127.565 167.681 127.031 166.119C125.648 162.075 124.018 158.117 122.33 154.192C120.51 149.957 118.597 145.761 116.635 141.592C115.022 138.161 113.377 134.747 111.698 131.347C111.158 130.251 110.614 129.157 110.066 128.064C109.817 127.566 109.607 126.967 109.284 126.513C109.271 126.491 109.26 126.469 109.25 126.447C109.075 126.102 108.557 126.406 108.732 126.749H108.738Z'
        fill='#1B1B1B'
      />
      <path
        d='M93.197 135.275L87.797 136.955C87.7208 136.978 87.6562 137.029 87.6169 137.098C87.5777 137.167 87.567 137.248 87.587 137.325C88.007 138.664 88.445 139.997 88.8866 141.329C89.9786 144.625 91.1114 147.905 92.285 151.169C93.7862 155.343 95.3546 159.494 97.0358 163.598C98.6642 167.57 100.383 171.518 102.369 175.324C103.809 178.084 105.369 181.001 107.585 183.221C107.777 183.413 107.977 183.597 108.185 183.772C108.478 184.019 108.905 183.598 108.61 183.347C106.385 181.467 104.872 178.691 103.5 176.17C101.479 172.45 99.755 168.579 98.129 164.679C96.4238 160.591 94.841 156.452 93.329 152.29C92.0986 148.906 90.9138 145.506 89.7746 142.09C89.4074 140.99 89.045 139.888 88.6874 138.784C88.5786 138.447 88.4702 138.109 88.3622 137.771C88.3154 137.625 88.2854 137.354 88.1906 137.23C88.1802 137.209 88.1729 137.186 88.169 137.162L87.959 137.531L93.359 135.851C93.7262 135.731 93.5702 135.158 93.1994 135.273L93.197 135.275Z'
        fill='#1B1B1B'
      />
      <path
        d='M207.508 170.238C205.391 161.635 208.699 143.277 208.699 143.277H208.686C208.405 143.323 203.646 144.068 186.656 145.244C184.697 145.38 182.747 145.604 180.829 145.895C165.709 148.185 152.552 154.635 152.322 154.749C148.645 149.365 137.412 143.921 137.237 143.837C138.416 164.576 134.638 179.811 131.38 188.756C129.157 194.855 127.18 198.029 127.18 198.029C135.649 199.484 134.988 204.249 143.591 208.484C152.194 212.719 163.44 204.122 181.7 198.692C199.961 193.262 208.17 192.075 210.02 190.62C211.871 189.164 209.626 178.841 207.508 170.238ZM152.548 199.433C152.401 201.055 152.168 202.669 151.849 204.266C151.609 205.382 151.326 206.525 150.79 207.539C150.656 207.791 150.276 207.567 150.409 207.317C150.517 207.113 150.613 206.903 150.698 206.689C151.178 205.507 151.43 204.234 151.644 202.982C151.936 201.266 152.113 199.532 152.251 197.797C152.491 194.797 152.599 191.774 152.646 188.759C152.668 187.439 152.676 186.129 152.678 184.815C152.678 180.29 152.587 175.764 152.432 171.24C152.312 167.674 152.154 164.11 151.958 160.547C151.88 159.099 151.8 157.653 151.703 156.209C151.684 155.925 152.124 155.927 152.143 156.209C152.143 156.234 152.143 156.26 152.143 156.284C152.214 156.846 152.216 157.424 152.25 157.988C152.323 159.215 152.391 160.441 152.455 161.669C152.652 165.439 152.809 169.212 152.926 172.987C153.065 177.567 153.144 182.15 153.106 186.733C153.099 187.409 153.091 188.084 153.082 188.759C153.03 192.321 152.898 195.888 152.546 199.433H152.548Z'
        fill='#1B1B1B'
      />
      <path
        d='M176.212 136.136C179.608 135.278 182.999 134.368 186.323 133.256C188.461 132.536 190.731 131.795 192.621 130.534L192.261 130.487L197.749 134.884L206.459 141.861L208.489 143.487L208.621 142.985C207.845 143.126 207.084 143.194 206.262 143.288C203.581 143.594 200.892 143.836 198.203 144.064C193.037 144.503 187.824 144.682 182.68 145.335C177.339 146.012 172.077 147.239 166.932 148.815C164.194 149.655 161.489 150.595 158.819 151.636C157.481 152.155 156.154 152.7 154.836 153.272C154.272 153.516 153.712 153.767 153.156 154.024C152.937 154.125 152.718 154.227 152.5 154.33C152.457 154.35 152.13 154.494 152.245 154.457L152.584 154.595C150.676 151.846 147.815 149.782 145.054 147.96C142.596 146.335 140.036 144.87 137.391 143.574C137.045 143.405 136.74 143.922 137.088 144.093C139.618 145.333 142.069 146.728 144.429 148.268C147.211 150.077 150.149 152.134 152.067 154.899C152.1 154.955 152.15 154.999 152.21 155.024C152.27 155.05 152.337 155.056 152.4 155.042C153.101 154.81 153.778 154.397 154.453 154.097C155.626 153.577 156.809 153.08 158.002 152.606C160.407 151.646 162.841 150.766 165.306 149.966C170.362 148.325 175.536 147.006 180.793 146.205C186.161 145.385 191.622 145.215 197.029 144.765C199.953 144.525 202.876 144.266 205.789 143.943C206.784 143.832 207.793 143.745 208.779 143.566C208.829 143.552 208.875 143.525 208.911 143.487C208.948 143.45 208.974 143.403 208.988 143.353C209.001 143.302 209.001 143.249 208.987 143.198C208.974 143.148 208.947 143.102 208.911 143.064L203.422 138.668L194.712 131.691L192.682 130.065C192.634 130.02 192.574 129.991 192.509 129.983C192.445 129.975 192.379 129.987 192.322 130.018C190.421 131.286 188.143 132.024 185.992 132.737C182.723 133.817 179.392 134.714 176.056 135.556C175.681 135.651 175.84 136.229 176.215 136.134L176.212 136.136Z'
        fill='#1B1B1B'
      />
      <path
        d='M163.971 150.091C164.381 149.952 164.799 149.813 165.225 149.676C164.798 149.813 164.38 149.952 163.971 150.091Z'
        fill='#1B1B1B'
      />
      <path
        d='M127.851 176.449C127.755 177.752 127.287 179.276 126.693 180.529C125.418 183.208 123.157 185.168 120.231 185.809C117.661 186.373 114.971 185.966 112.47 185.273C112.097 185.17 111.939 185.753 112.311 185.851C116.271 186.949 120.874 187.254 124.287 184.573C126.305 182.988 127.565 180.613 128.16 178.145C128.303 177.59 128.4 177.025 128.451 176.454C128.479 176.069 127.879 176.071 127.851 176.454V176.449Z'
        fill='#1B1B1B'
      />
      <path
        d='M192.053 147.756C191.935 147.834 191.847 147.952 191.805 148.088C191.762 148.223 191.768 148.37 191.82 148.502C192.886 151.166 197.948 164.596 194.391 170.958C190.431 178.038 181.551 180.678 179.391 172.878C178.136 168.345 178.317 162.476 177.573 158.095C177.422 157.226 177.092 156.399 176.603 155.666C176.114 154.932 175.477 154.309 174.733 153.837C173.988 153.365 173.154 153.053 172.282 152.922C171.41 152.791 170.521 152.844 169.671 153.078C169.671 153.078 172.78 154.038 172.966 157.158C173.152 160.278 172.911 168.318 174.111 173.118C175.311 177.918 180.231 182.118 186.351 181.038C192.471 179.958 197.631 174.661 197.151 166.209C196.748 159.105 193.886 150.596 192.983 148.064C192.952 147.975 192.9 147.895 192.833 147.829C192.765 147.763 192.683 147.713 192.594 147.684C192.504 147.654 192.409 147.645 192.316 147.658C192.222 147.671 192.133 147.704 192.054 147.757L192.053 147.756Z'
        fill='white'
      />
      <path
        d='M184.654 103.024C178.721 103.024 174.79 109.127 174.79 118.337C174.79 109.129 170.857 103.024 164.926 103.024C170.859 103.024 174.79 96.9209 174.79 87.7109C174.79 96.9197 178.722 103.024 184.654 103.024Z'
        fill='#5E59FF'
      />
      <path
        d='M194.821 127.781C190.461 127.781 187.571 132.267 187.571 139.035C187.571 132.267 184.682 127.781 180.322 127.781C184.682 127.781 187.571 123.295 187.571 116.527C187.571 123.297 190.461 127.781 194.821 127.781Z'
        fill='#5E59FF'
      />
      <path
        d='M135.565 99.2018C135.87 98.9062 136.25 98.6983 136.664 98.5999C137.077 98.5015 137.51 98.5163 137.916 98.6426C139.004 98.987 139.561 100.026 139.792 101.076C139.875 101.453 140.454 101.293 140.371 100.917C140.094 99.6554 139.365 98.4674 138.075 98.0642C137.567 97.911 137.027 97.8965 136.511 98.022C135.995 98.1475 135.522 98.4086 135.141 98.7782C134.862 99.0458 135.286 99.4694 135.566 99.203L135.565 99.2018Z'
        fill='#1B1B1B'
      />
      <path
        d='M145.11 86.7344C145.11 86.7344 146.07 89.0012 147.43 89.7188L145.11 86.7344Z'
        fill='#1B1B1B'
      />
      <path
        d='M144.85 86.8805C145.353 88.0541 146.143 89.3309 147.278 89.9717C147.615 90.1613 147.918 89.6441 147.58 89.4533C146.535 88.8629 145.83 87.6533 145.368 86.5733C145.216 86.2193 144.699 86.5253 144.849 86.8757L144.85 86.8805Z'
        fill='#1A1A1A'
      />
      <path
        d='M136.869 85.4766C136.869 85.4766 135.109 87.0366 133.59 86.7354L136.869 85.4766Z'
        fill='#1B1B1B'
      />
      <path
        d='M136.659 85.2634C135.881 85.9438 134.739 86.611 133.671 86.4454C133.293 86.3866 133.131 86.965 133.511 87.0238C134.815 87.2278 136.123 86.527 137.083 85.6882C137.375 85.4338 136.949 85.0102 136.659 85.2634Z'
        fill='#1A1A1A'
      />
    </svg>
  )
}

export default NoReturnsIll
