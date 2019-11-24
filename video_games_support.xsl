<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xsL="http://www.w3.org/1999/XSL/Transform"
>
<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <xsl:element name="root">
            <xsl:call-template name="stats"/>
            <xsl:call-template name="raport"/>
        </xsl:element>
    </xsl:template>

    <!-- Statystyki -->
    <xsl:template name="stats">
        <xsl:element name="stats">
            <xsl:element name="gameCount">
                <xsl:value-of select="count(//*[name()='games']/*[name()='game'])"/>
            </xsl:element>
            <xsl:element name="platformCount">
                <xsl:value-of select="count(//*[name()='platforms']/*[name()='platform'])"/>
            </xsl:element>
            <xsl:element name="genreCount">
                <xsl:value-of select="count(//*[name()='genres']/*[name()='genre'])"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <!-- Raport -->
    <xsl:template name="raport">
        <xsl:element name="raport">
            <!-- Przepisanie opisu -->
            <xsl:element name="description">
                <xsl:value-of select="//*[name()='description']"/>
            </xsl:element>
            <!-- Lista gier -->
            <xsl:element name="gameList">
                <xsl:apply-templates select="//*[name()='games']/*"/>
            </xsl:element>
            <!-- Lista autorów listy -->
            <xsl:element name="authors">
                <xsl:apply-templates select="//*[name()='authors']/*"/><!-- TODO: Implement template -->
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <!-- Lista gier, wybieramy dzieci elementu games -->
    <xsl:template match="//*[name()='games']/*">
        <xsl:element name="game">
            <xsl:element name="title">
                <xsl:attribute name="language">
                    <xsl:value-of select="*[name()= 'title']/@language"/>
                </xsl:attribute>
                <xsl:value-of select="*[name()= 'title']"/>
            </xsl:element>
            <xsl:element name="price">
                <xsl:apply-templates select="*[name() = 'price']"/>
            </xsl:element>
            <xsl:element name="genre">
                <xsl:variable name="G" select="*[name()= 'relatedGenre']/@id"/>
                <xsl:value-of select="$G"/>
                <!-- TODO: fix genres display -->
            </xsl:element>
            <xsl:element name="relasedDate">
                <xsl:apply-templates select="*[name()= 'releaseDate']"/><!-- TODO: Implement themes for it -->
            </xsl:element>
            <xsl:element name="developer">
                <xsl:value-of select="*[name()='developer']"/>
            </xsl:element>
            <!-- TODO: Implement relatedPlatforms -->
            <xsl:element name="publisher">
                <xsl:value-of select="*[name()='publisher']"/>
            </xsl:element>
            <xsl:element name="percentageRating">
                <xsl:attribute name="source">
                    <xsl:value-of select="*[name() = 'rating']/@source"/>
                </xsl:attribute>
                <xsl:variable name="maxRating" select="*[name() = 'rating']/@max"/>
                <xsl:variable name="rating" select="*[name() = 'rating']"/>
                <xsl:value-of select="concat(($rating * 100) div $maxRating,' %')"/>
            </xsl:element>
            <!-- TODO: Implement PEGI -->
            <!--<rating source="Metacritics" max="10">7.6</rating>-->
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name() = 'price']">
        <xsl:value-of select="concat(.,' ',@currency)"/>
    </xsl:template>

</xsl:stylesheet>
