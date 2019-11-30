<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
    <xsl:output method="xml" doctype-system="http://www.w3.org/tr/xhtml1/dtd/xhtml1-strict.dtd" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <xsl:element name="html" >

            <xsl:element name="head">
                <xsl:element name="title">
                    <xsl:value-of select="//*[name()='description']"/>
                </xsl:element>
            </xsl:element>

            <xsl:element name="body">
                <xsl:attribute name="style">
                    font-size:18px
                </xsl:attribute>
                <xsl:call-template name="gameList"/>
                <xsl:call-template name="stats"/>
            </xsl:element>

        </xsl:element>
    </xsl:template>

    <xsl:template name="gameList">
        <xsl:element name="div">
            <xsl:element name="div">
                <xsl:attribute name="style">display:block;text-align:center;</xsl:attribute>
                <xsl:apply-templates select="//*[name()='game']">
                    <xsl:sort select="*[name()='genre']"/>
                </xsl:apply-templates>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="//*[name()='game']">
        <xsl:element name="table">
            <xsl:attribute name="style">background:#deeaee;display:inline-block;width:65%</xsl:attribute>
            <xsl:attribute name="border">1</xsl:attribute>
            <xsl:element name="thead">
                <xsl:call-template name="tableHead"/>
            </xsl:element>
            <xsl:element name="tbody">
                <xsl:call-template name="tableBody"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <!-- Nagłówek tabeli-->
    <xsl:template name="tableHead">
        <xsl:element name="tr">
            <xsl:attribute name="style">text-align:center;background-color:#f7786b;width:100%</xsl:attribute>
            <xsl:element name="th">
                <xsl:attribute name="colspan">3</xsl:attribute>
                <xsl:value-of select="*[name()='title']"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <!-- zawartosc tabeli-->
    <xsl:template name="tableBody">
        <xsl:element name="tr">
            <xsl:element name="td">
                <xsl:attribute name="rowspan">7</xsl:attribute>
                <xsl:element name="img">
                    <xsl:attribute name="width">150px</xsl:attribute>
                    <xsl:attribute name="height">200px</xsl:attribute>
                    <xsl:attribute name="src">
                        <xsl:value-of select="*[name()='coverArt']"/>
                    </xsl:attribute>
                </xsl:element>
            </xsl:element>
            <xsl:element name="td">
                <xsl:attribute name="width">40%</xsl:attribute>
                Cena:
            </xsl:element>
            <xsl:element name="td">
                <xsl:attribute name="width">50%</xsl:attribute>
                <xsl:value-of select="*[name()='price']"/>
            </xsl:element>
        </xsl:element>
        <xsl:element name="tr">
            <xsl:element name="td">
                Gatunek:
            </xsl:element>
            <xsl:element name="td">
                <xsl:value-of select="*[name()='genre']"/>
            </xsl:element>
        </xsl:element>
        <xsl:element name="tr">
            <xsl:element name="td">
                Data Wydania:
            </xsl:element>
            <xsl:element name="td">
                <xsl:value-of select="*[name()='releaseDate']"/>
            </xsl:element>
        </xsl:element>
        <xsl:call-template name="developerPublisher"/>
        <xsl:element name="tr">
            <xsl:element name="td">
                Platformy:
            </xsl:element>
            <xsl:element name="td">
                <xsl:value-of select="*[name()='platforms']"/>
            </xsl:element>
        </xsl:element>
        <xsl:element name="tr">
            <xsl:element name="td">
                <xsl:value-of select="concat('Ocena przez ',*[name()='rating']/*[name()='source'],':')"/>
            </xsl:element>
            <xsl:element name="td">
                <xsl:value-of select="concat(*[name()='rating']/*[name()='percentageRating'],' %')"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <!-- wybór elementów developer/publisher-->
    <xsl:template name="developerPublisher">
        <xsl:variable name="developer" select="*[name()='developer'] | *[name()='devloperPublisher']"/>
        <xsl:variable name="publisher" select="*[name()='publisher'] | *[name()='devloperPublisher']"/>
        <xsl:variable name="devloperPublisher" select="*[name()='devloperPublisher']"/>
        <xsl:choose>
            <xsl:when test="$developer = $publisher">
                <xsl:element name="tr">
                    <xsl:element name="td">
                        Wydawca/Producent:
                    </xsl:element>
                    <xsl:element name="td">
                        <xsl:value-of select="$devloperPublisher"/>
                    </xsl:element>
                </xsl:element>
            </xsl:when>
            <xsl:otherwise>
                <xsl:element name="tr">
                    <xsl:element name="td">
                        Wydawca:
                    </xsl:element>
                    <xsl:element name="td">
                        <xsl:value-of select="$publisher"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="tr">
                    <xsl:element name="td">
                        Producent:
                    </xsl:element>
                    <xsl:element name="td">
                        <xsl:value-of select="$developer"/>
                    </xsl:element>
                </xsl:element>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template name="stats">

    </xsl:template>

</xsl:stylesheet>

