<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns="http://www.w3.org/2000/svg"
>

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:variable name="viewportX" select="100"/>
    <xsl:variable name="viewportY" select="100"/>
    <xsl:variable name="background" select="'#5287cc'"/>
    <xsl:variable name="background-header" select="'#ffcfbf'"/>
    <xsl:variable name="background-btn" select="'#4FB6E3'"/>
    
    <xsl:template match="/">
        <xsl:element name="svg" namespace="http://www.w3.org/2000/svg">
            <xsl:namespace name="xlink" select="'http://www.w3.org/1999/xlink'"/>
            <xsl:attribute name="viewBox"><xsl:value-of select="concat('0 0 ',string($viewportX),' ',string($viewportY))"/></xsl:attribute>
            <rect x="0" y="0" width="100%" height="100%" fill="{$background}"/>
            <xsl:call-template name="style"/>
            <xsl:call-template name="scripts"/>
            <xsl:call-template name="header"/>
            <xsl:call-template name="content"/>
        </xsl:element>
    </xsl:template>

    <xsl:template name="style">
        <style type="text/css">
            <![CDATA[
            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
            @import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');
            @import url('https://fonts.googleapis.com/css?family=Exo&display=swap');
            ]]></style>
    </xsl:template>
    <xsl:template name="scripts">
        <xsl:element name="script">
            <xsl:attribute name="type">text/javascript</xsl:attribute>
            <xsl:attribute name="href">svg.js</xsl:attribute>
        </xsl:element>
    </xsl:template>

    <xsl:template name="header">
        <rect width="99" height="20" x="0.5" y="0.5" fill="{$background-header}"/>
        <line x1="0.5" x2="99.5" y1="20" y2="20" stroke="#5184AF" stroke-width="1" stroke-linecap="square" stroke-dasharray="1, 5"/>
        <line x1="0.5" x2="99.5" y1="1" y2="1" stroke="#5184AF" stroke-width="1" stroke-linecap="square" stroke-dasharray="1, 5"/>
        <text x="32" y="1em">
            <xsl:attribute name="style">font-family: 'Caveat', cursive;font-size: 0.75em;</xsl:attribute>
            <xsl:value-of select="//raport/description"/>
        </text>
        <rect width="10" height="15" x="4" y="0.2em" fill="{$background-btn}" rx="2" ry="2"/>
        <rect width="10" height="15" x="86" y="0.2em" fill="{$background-btn}" rx="2" ry="2"/>
        <text x="5" y="1.2em">
            <xsl:attribute name="style">font-size: 0.75em;</xsl:attribute>
            <xsl:text>⏴</xsl:text>
        </text>
        <text x="83.8" y="1.2em">
            <xsl:attribute name="style">font-size: 0.75em;</xsl:attribute>
            <xsl:text>⏵</xsl:text>
        </text>
        <rect id="BtnNext" width="10" height="15" x="4" y="0.2em" fill="red" rx="2" ry="2" opacity="0"/>
        <rect id="BtnPrev" width="10" height="15" x="86" y="0.2em" fill="red" rx="2" ry="2" opacity="0"/>

    </xsl:template>

    <xsl:template name="content">
        <clipPath id="clipPages">
            <rect width="100" height="89" x="0" y="21"/>
        </clipPath>
        <g clip-path="url(#clipPages)">
            <g class="page" transform="translate(0,21)">
                <xsl:call-template name="gameList"/>
                <xsl:call-template name="animationsPage"/>
            </g>
            <g class="page" transform="translate(0,21)">
                <xsl:call-template name="circleGraph"/>
                <xsl:call-template name="animationsPage"/>
            </g>
            <g class="page" transform="translate(0,21)">
                <xsl:call-template name="countGamesInGenre"/>
                <xsl:call-template name="animationsPage"/>
            </g>
        </g>
    </xsl:template>

    <xsl:template name="animationsPage">
        <xsl:variable name="animationTime" select="'1s'"/>
        <xsl:variable name="y" select="'21'"/>
        <animateTransform begin="indefinite" id="hideAnimationNext" attributeName="transform" attributeType="XML" from="0,{$y}" to="-{$viewportX},{$y}" dur="{$animationTime}"/>
        <animateTransform begin="indefinite" id="showAnimationNext" attributeName="transform" attributeType="XML" from="{$viewportX},{$y}" to="0,{$y}" dur="{$animationTime}"/>
        <animateTransform begin="indefinite" id="hideAnimationPrev" attributeName="transform" attributeType="XML" from="0,{$y}" to="{$viewportX},{$y}" dur="{$animationTime}"/>
        <animateTransform begin="indefinite" id="showAnimationPrev" attributeName="transform" attributeType="XML" from="-{$viewportX},{$y}" to="0,{$y}" dur="{$animationTime}"/>
    </xsl:template>

    <xsl:template name="gameList">
        <rect x="1" y="1" width="98" height="77" fill="white" rx="5" ry="5"/>
        <xsl:for-each select="//gameList/game">
            <g class="game" transform="translate(3,25)">
                <g transform="translate(25,0)">
                    <text x="0" y="5">
                        <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.25em;</xsl:attribute>
                        <xsl:value-of select="concat('Tytuł: ',title)"/>
                    </text>
                    <xsl:choose>
                        <xsl:when test="element-available('price')">
                            <text x="0" y="10">
                                <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.25em;</xsl:attribute>
                                <xsl:value-of select="concat('Cena: ',price)"/>
                            </text>
                        </xsl:when>
                        <xsl:otherwise>
                            <text x="0" y="10">
                                <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.25em;</xsl:attribute>
                                <xsl:value-of select="'Cena: Darmowe'"/>
                            </text>
                        </xsl:otherwise>
                    </xsl:choose>
                    <text x="0" y="15">
                        <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.25em;</xsl:attribute>
                        <xsl:value-of select="concat('Gatunek: ',genre)"/>
                    </text>
                    <text x="0" y="20">
                        <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.25em;</xsl:attribute>
                        <xsl:value-of select="concat('Data wydania: ',releaseDate)"/>
                    </text>
                    <text x="0" y="25">
                        <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.25em;</xsl:attribute>
                        <xsl:value-of select="concat(rating/source,': ',rating/percentageRating,' %')"/>
                    </text>
                </g>
                <image x="0" y="0" width="20">
                    <xsl:attribute name="href">
                        <xsl:value-of select="coverArt"/>
                    </xsl:attribute>
                </image>
            </g>
        </xsl:for-each>
        <rect width="50" height="6" x="25" y="70" fill="{$background-btn}" rx="2" ry="2"/>
        <text x="40" y="74.5">
            <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.3em;</xsl:attribute>
            <xsl:value-of select="'Następna'"/>
        </text>
        <rect id="BtnNextGame" width="50" height="6" x="25" y="70" fill="red" rx="2" ry="2" opacity="0"/>
    </xsl:template>

    <xsl:template name="baseGraph">
        <rect x="5" y="5" width="90" height="70" fill="white" rx="5" ry="5"/>
        <line x1="20" x2="90" y1="60" y2="60" stroke-width="0.5" stroke="black"/>
        <line x1="20" x2="20" y1="10" y2="60" stroke-width="0.5" stroke="black"/>
    </xsl:template>
    <xsl:template name="baseGraphNumberLabelY">
        <xsl:param name="max"/>
        <xsl:param name="min"/>
        <text x="7" y="13.2">
            <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.3em;</xsl:attribute>
            <xsl:value-of select="$max"/>
        </text>
        <text x="7" y="37.7">
            <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.3em;</xsl:attribute>
            <xsl:value-of select="sum($max,$min) div 2"/>
        </text>
        <text x="7" y="62.2">
            <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.3em;</xsl:attribute>
            <xsl:value-of select="$min"/>
        </text>
        <line x1="18" x2="20" y1="60" y2="60" stroke-width="0.5" stroke="black"/>
        <line x1="18" x2="20" y1="36" y2="36" stroke-width="0.5" stroke="black"/>
        <line x1="18" x2="20" y1="12" y2="12" stroke-width="0.5" stroke="black"/>
    </xsl:template>
    <xsl:template name="baseGraphDescription">
        <xsl:param name="desc"/>
        <text x="20" y="70">
            <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.3em;</xsl:attribute>
            <xsl:value-of select="$desc"/>
        </text>
    </xsl:template>
    <xsl:template name="baseGraphBar">
        <xsl:param name="pos"/>
        <xsl:param name="countAllColumns"/>
        <xsl:param name="max"/>
        <xsl:param name="min"/>
        <xsl:param name="value"/>
        <xsl:param name="text"/>
        <xsl:variable name="spaceForColumns" select="65"/>
        <xsl:variable name="columnWidth" select="$spaceForColumns div $countAllColumns"/>
        <xsl:variable name="percentage" select="(($value - $min) * 100) div ($max - $min)"/>
        <g>
            <rect x="{($pos*$columnWidth)}" y="59.75" width="{$columnWidth}" height="{$percentage * 0.48}" fill="yellow"
                  transform="rotate(180 {10.5+($pos*$columnWidth)} 59.75)"
                  stroke-width="0.1"
                  stroke="black"
            />
            <text x="{($pos*$columnWidth)-35}" y="{$spaceForColumns - 2*$columnWidth}"
                  transform="rotate(90 {10.5+($pos*$columnWidth)} 59.75)"
            >
                <xsl:attribute name="style">font-family: 'Exo', sans-serif;font-size: 0.3em;</xsl:attribute>
                <xsl:value-of select="$text"/>
            </text>
        </g>
    </xsl:template>

    <xsl:template name="countGamesInGenre">
        <g>
            <xsl:variable name="max" select="4"/>
            <xsl:call-template name="baseGraph"/>
            <xsl:call-template name="baseGraphNumberLabelY">
                <xsl:with-param name="max" select="$max"/>
                <xsl:with-param name="min" select="'0'"/>
            </xsl:call-template>
            <xsl:call-template name="baseGraphDescription">
                <xsl:with-param name="desc" select="'Ilość gier według gatunku'"/>
            </xsl:call-template>
            <xsl:variable name="columnNames" select="distinct-values(//gameList/game/genre)"/>
            <xsl:variable name="columnCount" select="count($columnNames)"/>
            <xsl:for-each-group select="//gameList/game" group-by="genre">
                <xsl:variable name="genre" select="current-grouping-key()"/>
                <xsl:call-template name="baseGraphBar">
                    <xsl:with-param name="value" select="count(//gameList/game[genre=$genre])"/>
                    <xsl:with-param name="countAllColumns" select="$columnCount"/>
                    <xsl:with-param name="pos" select="position()"/>
                    <xsl:with-param name="min" select="0"/>
                    <xsl:with-param name="max" select="$max"/>
                    <xsl:with-param name="text" select="$genre"/>
                </xsl:call-template>
            </xsl:for-each-group>
        </g>
    </xsl:template>

    <xsl:template name="circleGraph">
        <!-- TODO to co tu nie powinoo robić problemu -->
    </xsl:template>

</xsl:stylesheet>