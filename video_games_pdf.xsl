<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fo="http://www.w3.org/1999/XSL/Format">
    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="/">
        <fo:root>
            <fo:layout-master-set>
                <fo:simple-page-master master-name="A4-portrait"
                                       page-height="29.7cm" page-width="21.0cm" margin="2cm">
                    <fo:region-body/>
                </fo:simple-page-master>
            </fo:layout-master-set>
            <fo:page-sequence master-reference="A4-portrait">
                <fo:flow flow-name="xsl-region-body">
                    <fo:block>
                        <xsl:apply-templates select="//raport"/>
                    </fo:block>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>

    <xsl:template match="//raport">
        <xsl:apply-templates select="description"/>
        <xsl:apply-templates select="gameList"/>
    </xsl:template>

    <xsl:template match="//description">
        <fo:block font-size="18" font-weight="bold" text-align="center">
            <xsl:value-of select="."/>
        </fo:block>
    </xsl:template>

    <xsl:template match="//gameList">

    </xsl:template>

    <xsl:template name="displayChilds">
        <xsl:text> Element </xsl:text>
        <xsl:value-of select="name()"/>
        <xsl:text> - </xsl:text>
        <xsl:for-each select="child::node()">
            <xsl:value-of select="name()"/>
            <xsl:text> | </xsl:text>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>