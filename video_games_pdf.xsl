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
        <fo:block font-family="Caveat" font-size="18" font-weight="500"
                  text-align="center" padding-after="40px"> <!--TODO: dodać czcionke-->
            <xsl:value-of select="."/>
        </fo:block>
    </xsl:template>

    <xsl:template match="//gameList">
        <fo:block font-family="Roboto" font-size="12" font-weight="500" text-align="center"> <!--TODO: dodać czcionke-->
            <xsl:call-template name="table"/>
        </fo:block>
    </xsl:template>

    <xsl:template name="table">
        <fo:table table-layout="fixed" width="100%" text-align="center">
            <fo:table-body>
                <xsl:call-template name="firstRow"/>
                <xsl:for-each select="//game">
                    <xsl:call-template name="gameRows">
                        <xsl:with-param name="source" select="coverArt"/>
                    </xsl:call-template>
                </xsl:for-each>
            </fo:table-body>
        </fo:table>
    </xsl:template>

    <xsl:template name="firstRow">
        <fo:table-row>
            <fo:table-cell border-width="1px" border-style="solid">
                <fo:block padding="3pt" page-break-inside="avoid">
                    Tytuł
                </fo:block>
            </fo:table-cell>
            <fo:table-cell border-width="1px" border-style="solid">
                <fo:block padding="3pt" page-break-inside="avoid">
                    Cena
                </fo:block>
            </fo:table-cell>
            <fo:table-cell border-width="1px" border-style="solid">
                <fo:block padding="3pt" page-break-inside="avoid">
                    Gatunek
                </fo:block>
            </fo:table-cell>
            <fo:table-cell border-width="1px" border-style="solid">
                <fo:block padding="3pt" page-break-inside="avoid">
                    Data wydania
                </fo:block>
            </fo:table-cell>
            <fo:table-cell border-width="1px" border-style="solid">
                <fo:block padding="3pt" page-break-inside="avoid">
                    Platformy
                </fo:block>
            </fo:table-cell>
        </fo:table-row>
    </xsl:template>

    <xsl:template name="gameRows">
        <xsl:param name="source"/>
        <fo:table-row>
            <!--<fo:table-cell>
                <fo:block>
                    <fo:external-graphic src="{$source}" alignment-baseline="middle" width="20" height="10" />
                </fo:block>
            </fo:table-cell>-->
            <fo:table-cell padding="3pt" border-width="1px" border-style="solid">
                <fo:block page-break-inside="avoid">
                    <xsl:value-of select="title"/>
                </fo:block>
            </fo:table-cell>
            <fo:table-cell padding="3pt" border-width="1px" border-style="solid">
                <fo:block page-break-inside="avoid">
                    <xsl:value-of select="price"/>
                </fo:block>
            </fo:table-cell>
            <fo:table-cell padding="3pt" border-width="1px" border-style="solid">
                <fo:block page-break-inside="avoid">
                    <xsl:value-of select="genre"/>
                </fo:block>
            </fo:table-cell>
            <fo:table-cell padding="3pt" border-width="1px" border-style="solid">
                <fo:block page-break-inside="avoid">
                    <xsl:value-of select="releaseDate"/>
                </fo:block>
            </fo:table-cell>
            <fo:table-cell padding="3pt" border-width="1px" border-style="solid">
                <fo:block page-break-inside="avoid">
                    <xsl:value-of select="platforms"/>
                </fo:block>
            </fo:table-cell>
        </fo:table-row>
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