import { RiFacebookFill, RiInstagramFill, RiTwitterXFill } from "@remixicon/react"
import React from "react"

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto ">
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
                <div className="flex space-x-6 mb-2 ">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer nonopener" aria-label="Visit Our Facebook Page">
                        <RiFacebookFill />
                    </a>

                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer nonopener" aria-label="Visit Our Twitter Page">
                        <RiTwitterXFill />
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer nonopener" aria-label="Visit Our Instagram Page">
                        <RiInstagramFill />
                    </a>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} VastuSpaze. All rights reserved.

                </p>
            </div>
        </footer>
    )
}

export default Footer