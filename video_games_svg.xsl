<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns="http://www.w3.org/2000/svg">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <xsl:element name="svg" namespace="http://www.w3.org/2000/svg">
            <xsl:attribute name="viewBox">0 0 200 200</xsl:attribute>
            <xsl:call-template name="image"/>
        </xsl:element>
    </xsl:template>
    <xsl:template name="image">
        <xsl:call-template name="BaseGraph">
            <xsl:with-param name="positionX" select="0"/>
            <xsl:with-param name="positionY" select="0"/>
            <xsl:with-param name="maxValue" select="112312"/>
            <xsl:with-param name="minValue" select="0"/>
        </xsl:call-template>
        <g transform="translate(0,0)">
            <g transform="translate(0,0)">
                <rect width="10" height="50" x="0" y="0" fill="black"/>
            </g>
        </g>
    </xsl:template>

    <xsl:template name="BaseGraph">
        <xsl:param name="positionX"/>
        <xsl:param name="positionY"/>
        <xsl:param name="maxValue"/>
        <xsl:param name="minValue"/>
        <g transform="translate({$positionX},{$positionY})">
            <rect width="200" height="100" x="0" y="0" fill="black"/>
            <rect width="195" height="95" x="2.5" y="2.5" fill="white"/>
            <line x1="20" y1="85" x2="185" y2="85" stroke="black"/>
            <line x1="20" y1="5" x2="20" y2="85" stroke="black"/>
            <xsl:element name="text">
                <xsl:attribute name="x" select="5"/>
                <xsl:attribute name="y" select="15"/>
                <xsl:attribute name="style" select="'font-size: 0.5em'"/>
                <xsl:value-of select="$maxValue"/>
            </xsl:element>
            <xsl:element name="text">
                <xsl:attribute name="x" select="5"/>
                <xsl:attribute name="y" select="80"/>
                <xsl:attribute name="style" select="'font-size: 0.5em'"/>
                <xsl:value-of select="$minValue"/>
            </xsl:element>
        </g>
    </xsl:template>

</xsl:stylesheet>