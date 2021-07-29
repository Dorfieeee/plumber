import { chakra } from "@chakra-ui/react";

const ChakraSVG = chakra("svg");

const Heating = ({ circle, fill, ...props }) => {
    return (
        <ChakraSVG
            xmlns="http://www.w3.org/2000/svg"
            width="83.52"
            height="83.52"
            viewBox="0 0 83.52 83.52"
            aria-label="Topení - ikona"
            sx={{
                "& .svg-circle-border": {
                    fill: circle || "primary",
                },
                "& .svg-white-part": {
                    fill: fill || "primary",
                },
            }}
            {...props}
        >
            <g transform="translate(0 0)">
                <g fill="none">
                    <path
                        d="M41.76,0A41.76,41.76,0,1,1,0,41.76,41.76,41.76,0,0,1,41.76,0Z"
                        stroke="none"
                    />
                    <path
                        d="M 41.759765625 2 C 36.39135360717773 2 31.18457794189453 3.05096435546875 26.28409194946289 5.123703002929688 C 21.54976654052734 7.126152038574219 17.29747772216797 9.993255615234375 13.64536285400391 13.64536285400391 C 9.993255615234375 17.29747772216797 7.126152038574219 21.54976654052734 5.123703002929688 26.28409194946289 C 3.05096435546875 31.18457794189453 2 36.39135360717773 2 41.759765625 C 2 47.12817764282227 3.05096435546875 52.33495330810547 5.123703002929688 57.23544311523438 C 7.126152038574219 61.96976470947266 9.993255615234375 66.22205352783203 13.64536285400391 69.87416839599609 C 17.29747772216797 73.52627563476563 21.54976654052734 76.39337921142578 26.28409194946289 78.39582824707031 C 31.18457794189453 80.46856689453125 36.39135360717773 81.51953125 41.759765625 81.51953125 C 46.25218963623047 81.51953125 50.66182708740234 80.7796630859375 54.86616516113281 79.32048034667969 C 58.90686798095703 77.91807556152344 62.63813018798828 75.89649963378906 65.95657348632813 73.31170654296875 C 75.84705352783203 65.61038208007813 81.51953125 54.11013793945313 81.51953125 41.759765625 C 81.51953125 36.39135360717773 80.46856689453125 31.18457794189453 78.39582824707031 26.28409194946289 C 76.39337921142578 21.54976654052734 73.52627563476563 17.29747772216797 69.87416839599609 13.64536285400391 C 66.22205352783203 9.993255615234375 61.96976470947266 7.126152038574219 57.23544311523438 5.123703002929688 C 52.33495330810547 3.05096435546875 47.12817764282227 2 41.759765625 2 M 41.759765625 0 C 64.82304382324219 0 83.51953125 18.69648742675781 83.51953125 41.759765625 C 83.51953125 55.15953063964844 77.20831298828125 67.08522796630859 67.18532562255859 74.88972473144531 C 60.32015228271484 80.23715209960938 51.42327880859375 83.51953125 41.759765625 83.51953125 C 18.69648742675781 83.51953125 0 64.82304382324219 0 41.759765625 C 0 18.69648742675781 18.69648742675781 0 41.759765625 0 Z"
                        stroke="none"
                        className="svg-circle-border"
                    />
                </g>
            </g>
            <g transform="translate(21.748 20.111)">
                <g transform="translate(8.662)">
                    <path
                        d="M8.842,336.641l.922.742h0l.922.742a6.568,6.568,0,0,0,2.137-3.639,6.936,6.936,0,0,0-1.006-5.017,4.435,4.435,0,0,1-.461-3.957h0L8.968,324.7a6.463,6.463,0,0,0,.545,5.723,4.159,4.159,0,0,1,.419.883,4.644,4.644,0,0,1-.126,4.133A3.649,3.649,0,0,1,8.842,336.641Z"
                        transform="translate(-8.546 -324.7)"
                        fill="#c03308"
                    />
                    <path
                        d="M8.842,336.641l.922.742h0l.922.742a6.568,6.568,0,0,0,2.137-3.639,6.936,6.936,0,0,0-1.006-5.017,4.435,4.435,0,0,1-.461-3.957h0L8.968,324.7a6.463,6.463,0,0,0,.545,5.723,4.159,4.159,0,0,1,.419.883,4.644,4.644,0,0,1-.126,4.133A3.649,3.649,0,0,1,8.842,336.641Z"
                        transform="translate(-3.972 -324.7)"
                        fill="#c03308"
                    />
                    <path
                        d="M8.842,336.641l.922.742h0l.922.742a6.568,6.568,0,0,0,2.137-3.639,6.936,6.936,0,0,0-1.006-5.017,4.435,4.435,0,0,1-.461-3.957h0L8.968,324.7a6.463,6.463,0,0,0,.545,5.723,4.159,4.159,0,0,1,.419.883,4.644,4.644,0,0,1-.126,4.133A3.649,3.649,0,0,1,8.842,336.641Z"
                        transform="translate(0.602 -324.7)"
                        fill="#c03308"
                    />
                    <path
                        d="M8.842,336.641l.922.742h0l.922.742a6.568,6.568,0,0,0,2.137-3.639,6.936,6.936,0,0,0-1.006-5.017,4.435,4.435,0,0,1-.461-3.957h0L8.968,324.7a6.463,6.463,0,0,0,.545,5.723,4.159,4.159,0,0,1,.419.883,4.644,4.644,0,0,1-.126,4.133A3.649,3.649,0,0,1,8.842,336.641Z"
                        transform="translate(5.176 -324.7)"
                        fill="#c03308"
                    />
                    <path
                        d="M8.842,336.641l.922.742h0l.922.742a6.568,6.568,0,0,0,2.137-3.639,6.936,6.936,0,0,0-1.006-5.017,4.435,4.435,0,0,1-.461-3.957h0L8.968,324.7a6.463,6.463,0,0,0,.545,5.723,4.159,4.159,0,0,1,.419.883,4.644,4.644,0,0,1-.126,4.133A3.649,3.649,0,0,1,8.842,336.641Z"
                        transform="translate(9.75 -324.7)"
                        fill="#c03308"
                    />
                </g>
                <path
                    d="M-18.18,398.49a1.744,1.744,0,0,0,1.881,1.589,1.744,1.744,0,0,0,1.881-1.589v-1.174h3.549v1.174a1.744,1.744,0,0,0,1.881,1.589h0a1.744,1.744,0,0,0,1.881-1.589v-1.174h3.549v1.174a1.744,1.744,0,0,0,1.881,1.589h0A1.744,1.744,0,0,0,.207,398.49v-1.174H3.756v1.174a1.744,1.744,0,0,0,1.881,1.589h0a1.744,1.744,0,0,0,1.881-1.589v-1.174h3.549v1.174a1.744,1.744,0,0,0,1.881,1.589h0a1.744,1.744,0,0,0,1.881-1.589v-1.174h2.053V395.06H14.831V378.828h2.053v-.794H17.4a1.262,1.262,0,0,0,1.2.7,1.1,1.1,0,1,0,0-2.167,1.279,1.279,0,0,0-1.176.668h-.513v-.668H14.853v-1.282a1.744,1.744,0,0,0-1.881-1.589h0a1.744,1.744,0,0,0-1.881,1.589v1.282H7.519v-1.282A1.744,1.744,0,0,0,5.638,373.7h0a1.744,1.744,0,0,0-1.881,1.589v1.282H.207v-1.282A1.744,1.744,0,0,0-1.674,373.7h0a1.744,1.744,0,0,0-1.881,1.589v1.282H-7.105v-1.282A1.744,1.744,0,0,0-8.987,373.7h0a1.744,1.744,0,0,0-1.881,1.589v1.282h-3.549v-1.282A1.744,1.744,0,0,0-16.3,373.7a1.744,1.744,0,0,0-1.881,1.589v1.282h-1.967v2.257h1.967V395.06h-1.967v2.257h1.967Zm29.248-19.663V395.06H7.519V378.828Zm-7.312,0V395.06H.207V378.828Zm-7.312,0V395.06H-7.105V378.828Zm-10.861,0h3.549V395.06h-3.549Z"
                    transform="translate(20.147 -356.781)"
                    className="svg-white-part"
                />
            </g>
        </ChakraSVG>
    );
};

export default Heating;